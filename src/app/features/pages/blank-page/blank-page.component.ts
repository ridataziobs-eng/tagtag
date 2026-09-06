import { Component } from '@angular/core';
import { SidebarService } from '../../../core/service/sidebar/sidebar.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    imports: []
})
export class BlankPageComponent {
constructor(private sidebar: SidebarService){

}

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
