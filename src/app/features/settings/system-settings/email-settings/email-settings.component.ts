import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-email-settings',
    templateUrl: './email-settings.component.html',
    styleUrls: ['./email-settings.component.scss'],
    imports: [SettingsSidebarComponent]
})
export class EmailSettingsComponent {
  constructor(private sidebar: SidebarService) {}

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
