import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { SidebarService, apiResultFormat, pageSelection } from '../../../core/core.index';
import { routes } from '../../../core/helpers/routes';
import { DataService } from '../../../core/service/data/data.service';
import { inventoryreport } from '../../../shared/model/page.model';
import { PaginationService, tablePageSize } from '../../../shared/custom-pagination/pagination.service';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from '../../../shared/custom-pagination/custom-pagination.component';
import { MatSelectModule } from '@angular/material/select';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { FormsModule } from '@angular/forms';

interface data {
  value: string;
}

@Component({
    selector: 'app-inventory-report',
    templateUrl: './inventory-report.component.html',
      styleUrls: ['./inventory-report.component.scss'],
    imports: [CommonModule,CustomPaginationComponent,MatSelectModule,DateRangePickerComponent,RouterLink,FormsModule,MatSortModule]
})
export class InventoryReportComponent {
  initChecked = false;
  public routes = routes;
  // pagination variables
  public tableData: Array<inventoryreport> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<inventoryreport>;
  public searchDataValue = '';
  public row=true;
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router,
    private sidebar: SidebarService
  ) {
    this.data.getDataTable().subscribe((apiRes: apiResultFormat) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.inventoryReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData  });
          this.pageSize = res.pageSize;
        }
      });
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getInventoryReport().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: inventoryreport, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<inventoryreport>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: string): void {
    this.searchDataValue = value.trim().toLowerCase();
    this.dataSource.filter = this.searchDataValue;
    this.tableData = this.dataSource.filteredData;
    this.row = this.tableData.length > 0;
  
    if (this.searchDataValue !== '') {
      // Handle filtered data
      this.pagination.calculatePageSize.next({
        totalData: this.tableData.length,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.tableData.map((_, i) => i + 1), // Generates serials like [1, 2, 3...]
      });
    } else {
      // Handle reset to full data
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    }
  }



  

  public filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  selectedList1: data[] = [
    { value: 'Sort by Date' },
    { value: '25 9 23' },
    { value: '12 9 23' },
  ];
  selectedList2: data[] = [
    { value: 'Choose Product' },
    { value: 'Bold V3.2' },
    { value: 'Nike Jordan' },
  ];
  selectedList3: data[] = [
    { value: 'Choose Product' },
    { value: 'Accessories' },
    { value: 'Shoe' },
  ];
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
}
