import { Component } from '@angular/core';
import { routes } from '../../../../core/helpers/routes';
import { SidebarService } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';
    
@Component({
    selector: 'app-payment-gateway-settings',
    templateUrl: './payment-gateway-settings.component.html',
    styleUrls: ['./payment-gateway-settings.component.scss'],
    imports: [SettingsSidebarComponent]
})
export class PaymentGatewaySettingsComponent {
  public routes = routes;
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private sidebar: SidebarService) {}
}
