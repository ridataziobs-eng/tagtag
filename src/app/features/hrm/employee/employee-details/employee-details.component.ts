import { Component } from '@angular/core';
import { routes, SidebarService } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  imports: [RouterLink]
})
export class EmployeeDetailsComponent {
routes=routes
isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private sidebar: SidebarService) {}
}
