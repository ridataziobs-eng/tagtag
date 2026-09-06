import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
    selector: 'app-storage-settings',
    templateUrl: './storage-settings.component.html',
    styleUrls: ['./storage-settings.component.scss'],
    imports: [SettingsSidebarComponent]
})
export class StorageSettingsComponent {
  constructor( private sidebar: SidebarService){
    
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
