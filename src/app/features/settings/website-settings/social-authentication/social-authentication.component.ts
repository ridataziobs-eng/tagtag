import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/service/sidebar/sidebar.service';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-social-authentication',
    templateUrl: './social-authentication.component.html',
    styleUrls: ['./social-authentication.component.scss'],
    imports: [SettingsSidebarComponent]
})
export class SocialAuthenticationComponent {
  constructor( private sidebar: SidebarService){

  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
