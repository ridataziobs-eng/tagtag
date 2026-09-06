import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-sms-gateway',
    templateUrl: './sms-gateway.component.html',
    styleUrls: ['./sms-gateway.component.scss'],
    imports: [SettingsSidebarComponent] 
})
export class SmsGatewayComponent {
  constructor( private sidebar: SidebarService){

  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
