import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.scss'],
  imports: [SettingsSidebarComponent]
})
export class SignaturesComponent {
 constructor(private sidebar: SidebarService) {}

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
