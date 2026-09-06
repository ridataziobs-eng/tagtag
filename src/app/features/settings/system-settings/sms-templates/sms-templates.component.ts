import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
  selector: 'app-sms-templates',
  templateUrl: './sms-templates.component.html',
  styleUrls: ['./sms-templates.component.scss'],
  imports: [SettingsSidebarComponent] 
})
export class SmsTemplatesComponent {
  constructor( private sidebar: SidebarService){

  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
}
}
