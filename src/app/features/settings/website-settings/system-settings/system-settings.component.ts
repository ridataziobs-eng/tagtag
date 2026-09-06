import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/service/sidebar/sidebar.service';  
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-system-settings',
    templateUrl: './system-settings.component.html',
    styleUrls: ['./system-settings.component.scss'],  
    imports: [SettingsSidebarComponent]
})
export class SystemSettingsComponent {
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
