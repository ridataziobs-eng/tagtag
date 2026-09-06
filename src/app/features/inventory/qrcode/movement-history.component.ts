import { Component, OnInit } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { apiResultFormat, DataService, pageSelection, routes, SidebarService } from '../../../core/core.index';
import { barCodeMT } from '../../../shared/model/page.model';
import { PaginationService, tablePageSize } from '../../../shared/custom-pagination/pagination.service';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { DatePipe } from '@angular/common';


interface data {
  value: string;
}
@Component({
    selector: 'app-qrcode',
    templateUrl: './movement-history.component.html',
    styleUrl: './movement-history.component.scss',
    imports: [MatSelectModule,FormsModule,NgxBarcode6Module,MatSortModule,DatePipe]
})
export class MovementHistoryComponent implements OnInit {

  public cartValue = [4, 4];

  public addPos(i: number): void {
    this.cartValue[i]++;
  }
  public reducePos(i: number): void {
    this.cartValue[i]--;
  }

  public routes = routes;
  // pagination variables
  public tableData: Array<barCodeMT> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<barCodeMT>;
  public searchDataValue = '';
  //** / pagination variables

  constructor(
    private pagination: PaginationService,
    private sidebar: SidebarService
  ) {

  }
  ngOnInit(): void {
      const savedData = localStorage.getItem('qrCodes');

      if (savedData) {
        const parsedData: barCodeMT[] = JSON.parse(savedData);
        this.loadTableFromLocalStorage(parsedData);
      } else {
        console.log("pas de données sur le localstorage !!")
      }
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
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }



  private loadTableFromLocalStorage(data: barCodeMT[]): void {
    this.tableData = [];
    this.serialNumberArray = [];
    this.totalData = data.length;

    data.map((res: barCodeMT, index: number) => {
      res.sNo = index + 1;
      this.tableData.push(res);
      this.serialNumberArray.push(res.sNo);
    });

    this.dataSource = new MatTableDataSource<barCodeMT>(this.tableData);

    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      serialNumberArray: this.serialNumberArray,
    });
  }


}
