import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/service/sidebar/sidebar.service';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';
import { MatSelectModule } from '@angular/material/select';
interface data {
  value: string;
}

@Component({
    selector: 'app-appearance',
    templateUrl: './appearance.component.html',
    styleUrls: ['./appearance.component.scss'],
    imports: [SettingsSidebarComponent,MatSelectModule]
})
export class AppearanceComponent {
  constructor(private sidebar: SidebarService) {}
  
  isActive: string | null = 'light';
  isActive1: string | null = 'default';

  setActive(theme: string) {
    this.isActive = theme;
  }
  setActive1(theme: string) {
    this.isActive1 = theme;
  }
  public selectedValue1 = ''
  public selectedValue2 = ''

  selectedList1: data[] = [
    {value: 'Small - 85px'},
    {value: 'Large - 250px'},
  ];
  selectedList2: data[] = [
    {value: 'Nunito'},
    {value: 'Poppins'},
  ];
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  
}
