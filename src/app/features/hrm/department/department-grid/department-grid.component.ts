import { Component } from '@angular/core';
import { routes } from '../../../../core/helpers/routes';
import { SidebarService } from '../../../../core/service/sidebar/sidebar.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
interface data {
  value: string;
}

@Component({
    selector: 'app-department-grid',
    templateUrl: './department-grid.component.html',
    styleUrls: ['./department-grid.component.scss'],
    imports: [RouterLink,CommonModule]
})
export class DepartmentGridComponent {
  public routes = routes;
  public searchDataValue = '';
  public selectedValue1 = '';
  showFilter = false;
 
  
  public selectedValue2 = '';
  public selectedValue3 = '';
  selectedList1: data[] = [
    {value: 'Choose Type'},
    {value: 'Mitchum Daniel'},
    {value: 'Susan Lopez'},
   
  ];
  selectedList2: data[] = [
    {value: 'Choose Type'},
    {value: 'Mitchum Daniel'},
    {value: 'Susan Lopez'},
  ];
  selectedList3: data[] = [
    { value: 'Sort by Datee' },
    { value: 'Newest' },
    { value: 'Oldest' },
  ];
 

 

  constructor(private sidebar: SidebarService) {}

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  public filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  
}
