import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { routes } from '../../../../core/helpers/routes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-payslip',
    templateUrl: './payslip.component.html',
    styleUrls: ['./payslip.component.scss'],
    imports: [RouterLink]
})
export class PayslipComponent {
  public routes = routes;
  isCollapsed: boolean = false;
  constructor(private sidebar :SidebarService){}
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
