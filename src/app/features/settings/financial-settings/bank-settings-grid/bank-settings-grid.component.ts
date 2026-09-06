import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { routes } from '../../../../core/helpers/routes';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-bank-settings-grid',
    templateUrl: './bank-settings-grid.component.html',
    styleUrls: ['./bank-settings-grid.component.scss'],
    imports: [SettingsSidebarComponent]
})
export class BankSettingsGridComponent {
  public routes = routes;
  isActive: string ='default'
  default=true;
  constructor(private sidebar: SidebarService) {}

  setActive(theme: string) {
    this.isActive = theme;
 
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
