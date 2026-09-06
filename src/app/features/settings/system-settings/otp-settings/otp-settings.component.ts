import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-otp-settings',
    templateUrl: './otp-settings.component.html',
    styleUrls: ['./otp-settings.component.scss'],
    imports: [SettingsSidebarComponent,MatSelectModule]
})
export class OtpSettingsComponent {
  selectedValue1 = '';
  selectedValue2 = '';
  selectedValue3 = '';
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private sidebar: SidebarService) {}
}
