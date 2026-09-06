import { Component } from '@angular/core';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { SidebarService, routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
interface data {
  value: string;
}
@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss'],
    imports: [RouterLink,CommonModule,MatSelectModule,NgxEditorModule,BsDatepickerModule]
})
export class AddEmployeeComponent {
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['link'],
  ];
  constructor( private sidebar: SidebarService){

  }
  public routes = routes;

  public password : boolean[] = [false];


  public togglePassword(index: number){
    this.password[index] = !this.password[index]
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
