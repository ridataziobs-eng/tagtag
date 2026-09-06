import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/service/sidebar/sidebar.service';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-preference',
    templateUrl: './preference.component.html',
    styleUrls: ['./preference.component.scss'],
    imports: [SettingsSidebarComponent]
})
export class PreferenceComponent {
  constructor(private sidebar: SidebarService) {}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
