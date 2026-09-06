import { Component } from '@angular/core';
import { routes, SidebarService } from '../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss'],
  imports: [RouterLink]
})
export class InvoiceDetailsComponent {
routes=routes;
isCollapsed: boolean = false;
constructor(private sidebar:SidebarService){}
toggleCollapse() {
  this.sidebar.toggleCollapse();
  this.isCollapsed = !this.isCollapsed;
}
}
