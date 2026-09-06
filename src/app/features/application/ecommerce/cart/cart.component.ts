import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { CommonCounterComponent } from '../../../common/common-counter/common-counter.component';

@Component({
  selector: 'app-cart',
  imports: [CommonCounterComponent],
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(
    private sidebar: SidebarService
  ){}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
