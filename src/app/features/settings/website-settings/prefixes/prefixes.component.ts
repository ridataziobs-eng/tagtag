import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/service/sidebar/sidebar.service';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-prefixes',
    templateUrl: './prefixes.component.html',
    styleUrls: ['./prefixes.component.scss'],
    imports: [SettingsSidebarComponent]
})
export class PrefixesComponent {
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
