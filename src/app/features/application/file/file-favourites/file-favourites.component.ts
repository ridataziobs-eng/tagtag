import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { apiResultFormat, DataService, pageSelection, routes, SidebarService } from '../../../../core/core.index';
import { file } from '../../../../shared/model/page.model';
import { PaginationService, tablePageSize } from '../../../../shared/custom-pagination/pagination.service';
import { CustomPaginationComponent } from '../../../../shared/custom-pagination/custom-pagination.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

interface data {
  value: string;
}


@Component({
    selector: 'app-file-favourites',
    templateUrl: './file-favourites.component.html',
    styleUrl: './file-favourites.component.scss',
     imports: [CustomPaginationComponent,RouterLink,FormsModule,DragDropModule,MatSortModule,MatSelectModule,CommonModule]
})
export class FileFavouritesComponent {
  initChecked = false;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
 
  selectedList1: data[] = [
    { value: 'Owned By Me' },
    { value: 'Owned by Anyone' },
    { value: 'Not Owned by Me' },
  ];
  selectedList2: data[] = [
    { value: 'Recent' },
    { value: 'Last Week' },
    { value: 'Last Month' },
  ];
  selectedList3: data[] = [
    { value: 'All File types' },
    { value: 'Folders' },
    { value: 'PDF' },
    { value: 'Images' },
    { value: 'Videos' },
    { value: 'Audios' },
    { value: 'Excel' },
  ];
  selectedList4: data[] = [
    { value: 'Last Modified' },
    { value: 'Last Modified by Me' },
    { value: 'Last Opened by Me' },
    
  ];
  selectedList5: data[] = [
    { value: 'Sort by Date' },
    { value: 'Sort By Relevance' },
    { value: 'Sort By Size' },
    { value: 'Order Ascending' },
    { value: 'Order Descending' },
    { value: 'Upload Time' },
    
  ];
  public routes = routes;
  // pagination variables
  public tableData: Array<file> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<file>;
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
        if (this.router.url == this.routes.fileFavorites) {
          this.getTableData({ skip: res.skip, limit: this.totalData  });
          this.pageSize = res.pageSize;
        }
      });
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getFile().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: file, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<file>(this.tableData);
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

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  public appSidebar = true;

  toggleChange(){
   this.appSidebar = !this.appSidebar
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
