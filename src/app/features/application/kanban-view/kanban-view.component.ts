import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { routes, SidebarService } from '../../../core/core.index';
import { KanbanLowComponent } from './kanban-low/kanban-low.component';
import { KanbanMediumComponent } from './kanban-medium/kanban-medium.component';
import { KanbanHighComponent } from './kanban-high/kanban-high.component';
import { KanbanAllComponent } from './kanban-all/kanban-all.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
  interface data {
  value: string;
}
@Component({
    selector: 'app-kanban-view',
    templateUrl: './kanban-view.component.html',
    styleUrl: './kanban-view.component.scss',
    imports: [DragDropModule,KanbanLowComponent,KanbanMediumComponent,KanbanHighComponent,KanbanAllComponent,MatSelectModule,FormsModule,BsDatepickerModule] 
})
export class KanbanViewComponent {
  routes = routes
  public selectedValue1 = '';
  constructor(
    private sidebar: SidebarService
  ){}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedList1: data[] = [
    { value: 'Sort by Date' },
    { value: 'Ascending' },
    { value: 'Decending' },
    { value: 'Recently Viewed' },
    { value: 'Recently Added' },
    { value: 'Creation Date' },
  ];
}
