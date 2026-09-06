import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';
import { MatSelectModule } from '@angular/material/select';
interface data {
  value: string;
}
@Component({
    selector: 'app-pos-settings',
    templateUrl: './pos-settings.component.html',
    styleUrls: ['./pos-settings.component.scss'],
    imports: [SettingsSidebarComponent,MatSelectModule]
})
export class PosSettingsComponent {
  public selectedValue1 = '';
  selectedList1: data[] = [
    { value: 'A4' },
    { value: 'A4' },
    { value: 'A4' },
  ];
  constructor(private sidebar: SidebarService) {}

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

}
