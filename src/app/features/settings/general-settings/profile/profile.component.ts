import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService, routes } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    imports: [SettingsSidebarComponent,MatSelectModule]
})
export class ProfileComponent {
  public routes = routes;
  constructor(private sidebar: SidebarService, private router: Router) {}

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  navigation() {
    this.router.navigate([routes.generalSettings])
  }
}
