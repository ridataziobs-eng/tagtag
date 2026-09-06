import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import { apiResultFormat } from '../../../../core/core.index';
import { routes } from '../../../../core/helpers/routes';
import { DataService } from '../../../../core/service/data/data.service';
import { SidebarService } from '../../../../core/service/sidebar/sidebar.service';
import { PaginationService, pageSelection, tablePageSize } from '../../../../shared/custom-pagination/pagination.service';
import { leavesemployee } from '../../../../shared/model/page.model';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from '../../../../shared/custom-pagination/custom-pagination.component';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

interface data {
  value: string;
}

@Component({
    selector: 'app-leaves-employee',
    templateUrl: './leaves-employee.component.html',
    styleUrls: ['./leaves-employee.component.scss'],
    imports:[CommonModule,NgxEditorModule,BsDatepickerModule,CustomPaginationComponent,FormsModule,MatSortModule,MatSelectModule]
})
export class LeavesEmployeeComponent implements OnInit, OnDestroy {
  initChecked = false;
  public routes = routes;
  // pagination variables
  public tableData: Array<leavesemployee> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<leavesemployee>;
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
        if (this.router.url == this.routes.leavesEmployee) {
          this.getTableData({ skip: res.skip, limit: this.totalData  });
          this.pageSize = res.pageSize;
        }
      });
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getLeavesEmployee().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: leavesemployee, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<leavesemployee>(this.tableData);
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
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';

  selectedList1: data[] = [
    { value: 'Sort by Date' },
    { value: 'Newest' },
    { value: 'Oldest' },
  ];
  selectedList2: data[] = [
    { value: 'Choose Employee' },
    { value: 'Mitchum Daniel' },
    { value: 'Susan Lopez' },
    { value: 'Robert Grossman' },
    { value: 'Janet Hembre' },
  ];
  selectedList3: data[] = [
    { value: 'Choose Type' },
    { value: 'Sick Leave' },
    { value: 'Maternity' },
    { value: 'Vacation' },
  ];
  selectedList4: data[] = [
    { value: 'Choose Status' },
    { value: 'Approved' },
    { value: 'Rejected' },
    
  ];
  selectedList5: data[] = [
    { value: 'Choose' },
    { value: 'Sick Leave' },
    { value: 'Paternity' },
    
  ];
  selectedList6: data[] = [
    { value: 'Full Day' },
    { value: 'Sick Leave' },
    { value: 'Half Day' },
    
  ];
  selectedList7: data[] = [
    { value: 'Full Day' },
    { value: 'Sick Leave' },
    { value: 'Half Day' },
    
  ];
  editor!: Editor;
  editor1!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor1.destroy();
  }
  showBox = false;
  toggleBox() {
    this.showBox = !this.showBox;
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
