import { Component } from '@angular/core';
import { SidebarService } from '../../../core/core.index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  imports: [CommonModule]
})
export class PricingComponent {
constructor(private sidebar: SidebarService){

}

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
