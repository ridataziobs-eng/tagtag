import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index'; 
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';
import { MatSelectModule } from '@angular/material/select';
interface data {  
  value: string;
}

@Component({
    selector: 'app-gdpr-settings',
    templateUrl: './gdpr-settings.component.html',
    styleUrls: ['./gdpr-settings.component.scss'],
    imports: [SettingsSidebarComponent,MatSelectModule] 
})
export class GdprSettingsComponent {
  constructor(private sidebar: SidebarService) {}

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  public selectedValue1 = '';
  selectedList1: data[] = [
    { value: 'Left' },
    { value: 'Center' },
    { value: 'Right' },
  ];
}
