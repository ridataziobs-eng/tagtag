import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { CommonService, routes, SidebarService } from '../../../core/core.index';
import {MatSelectModule} from '@angular/material/select'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface data {
  value: string;
}

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
    imports: [MatSelectModule,CommonModule,RouterLink]
})
export class TodoComponent implements OnInit, OnDestroy {
  routes=routes
  isStrike:boolean[]=[false];
  isCollapsed: boolean = false;
  checked = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor(
    private sidebar: SidebarService,
    private common: CommonService,
    private renderer: Renderer2
  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  editor!: Editor;
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
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  public appSidebar = true;

  toggleChange() {
    this.appSidebar = !this.appSidebar;
  }
  strike(index:number):void{
    this.checked=!this.checked
    this.isStrike[index]=!this.isStrike
  }
}
