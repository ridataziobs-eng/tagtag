import { Component } from '@angular/core';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { SidebarService } from '../../../core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.scss',
    imports: [NgxEditorModule,MatSelectModule,FormsModule,DateRangePickerComponent,CommonModule]
})
export class NotesComponent {
  constructor(private sidebar: SidebarService) {}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedValue1 = '';
  selectedValue2 = '';
  selectedValue3 = '';
  selectedValue4 = '';
  selectedValue5 = '';
  selectedValue6 = '';
  selectedValue7 = '';
  selectedValue8 = '';
  selectedValue9 = '';
  public appSidebar = true;

  toggleChange() {
    this.appSidebar = !this.appSidebar;
  }

  editor!: Editor;
  editor1!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['link'],
  ];

  ngOnInit(): void {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor1.destroy();
  }
}
