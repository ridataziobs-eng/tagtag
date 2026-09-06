import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { apiResultFormat } from '../../../core/core.index';
import { routes } from '../../../core/helpers/routes';
import { DataService } from '../../../core/service/data/data.service';
import { SidebarService } from '../../../core/service/sidebar/sidebar.service';
import { stockadjustment } from '../../../shared/model/page.model';
import { PaginationService, pageSelection, tablePageSize } from '../../../shared/custom-pagination/pagination.service';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CustomPaginationComponent } from '../../../shared/custom-pagination/custom-pagination.component';
import { FormsModule } from '@angular/forms';

interface data {
  value: string;
}

@Component({
    selector: 'app-stock-adjustment',
    templateUrl: './stock-adjustment.component.html',
    styleUrl: './stock-adjustment.component.scss',
    standalone: true,
    imports: [CommonModule,MatSortModule,MatTableModule,MatSelectModule,CustomPaginationComponent,FormsModule]
})  
export class StockAdjustmentComponent {
  public selectedWarehouse: string = 'Choose Warehouse';
  initChecked = false;
  public routes = routes;
  // pagination variables
  public tableData: Array<stockadjustment> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<stockadjustment>;
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
        if (this.router.url == this.routes.stockAdjustment) {
          this.getTableData({ skip: res.skip, limit: this.totalData  });
          this.pageSize = res.pageSize;
        }
      });
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getStockadjustment().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: stockadjustment, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<stockadjustment>(this.tableData);
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
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

  public filter = false;
  openFilter() {
    this.filter = !this.filter;
  }


  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';
  public selectedValue8 = '';
  public selectedValue9 = '';
  public selectedValue10 = '';
  public selectedValue11 = '';
  public selectedValue12 = '';
  public selectedValue13 = '';
  public selectedValue14 = '';
  public selectedValue15 = '';
  public selectedValue16 = '';


  selectedList1: data[] = [
    { value: 'Sort by Date' },
    { value: 'Newest' },
    { value: 'Oldest' },
  ];
  selectedList2: data[] = [
    { value: 'Choose Warehouse' },
    { value: 'Lobar Handy' },
    { value: 'Quaint Warehouse' },
    { value: 'Traditional Warehouse' },
    { value: 'Cool Warehouse' },
  ];
  selectedList3: data[] = [
    { value: 'Choose Product' },
    { value: 'Nike Jordan' },
    { value: 'Apple Series 5 Watch' },
    { value: 'Amazon Echo Dot' },
    { value: 'Lobar Handy' },
  ];
  selectedList4: data[] = [
    { value: 'Choose Person' },
    { value: 'Steven' },
    { value: 'Gravely' },
];
selectedList5: data[] = [
  { value: 'Choose' },
  { value: 'Lobar Handy' },
  { value: 'Quaint Warehouse' },
];
selectedList6: data[] = [
  { value: 'Choose' },
  { value: 'Selosy' },
  { value: 'Logerro' },
];
selectedList7: data[] = [
  { value: 'Choose' },
  { value: 'Steven' },
  { value: 'Gravely' },
];
selectedList8: data[] = [
  { value: 'Lobar Handy' },
  { value: 'Quaint Warehouse' },
];
selectedList9: data[] = [
  { value: 'Selosy' },
    { value: 'Logerro' },
];
selectedList10: data[] = [
  { value: 'Steven' },
    { value: 'Gravely' },
];
selectedList11: data[] = [
  { value: 'Choose' },
  { value: 'Lobar Handy' },
  { value: 'Quaint Warehouse' },
];
selectedList12: data[] = [
  { value: 'Choose' },
  { value: 'Steven' },
  { value: 'Gravely' },
];
selectedList13: data[] = [
  { value: 'Lobar Handy' },
  { value: 'Quaint Warehouse' },
 
];
selectedList14: data[] = [
  { value: 'Steven' },
  { value: 'Gravely' },
 
];
selectedList15: data[] = [
  { value: 'Sort by Date' },
  { value: 'Newest' },
  { value: 'Oldest' },
 
];
selectedList16: data[] = [
  { value: 'Addition' },
  { value: 'Addition' },
  { value: 'Addition' },
 
];
showBox = false;
toggleBox() {
  this.showBox = !this.showBox;
}
public cartValue = [4,4];
public addPos(i: number): void {
  this.cartValue[i]++;
}
public reducePos(i: number): void {
  this.cartValue[i]--;
}
quantity: number = 2; // Initial quantity value

decreaseQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
  }
}

increaseQuantity() {
  this.quantity++;
}
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
