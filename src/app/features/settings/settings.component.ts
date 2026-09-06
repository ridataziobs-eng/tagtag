import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../core/core.index';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    imports: [CommonModule,RouterModule]
})
export class SettingsComponent {

    constructor(private sidebar: SidebarService) {}

    isCollapsed: boolean = false;
    toggleCollapse() {
      this.sidebar.toggleCollapse();
      this.isCollapsed = !this.isCollapsed;
    }
    public filter = false;
    openFilter() {
      this.filter = !this.filter;
    }

 

}
