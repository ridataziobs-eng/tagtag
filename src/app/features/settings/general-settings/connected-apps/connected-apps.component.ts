import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index'; 
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-connected-apps',
    templateUrl: './connected-apps.component.html',
    styleUrls: ['./connected-apps.component.scss'],
    imports: [SettingsSidebarComponent]
})
export class ConnectedAppsComponent {
  constructor(private sidebar: SidebarService) {}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

}
