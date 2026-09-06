import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';

@Component({
  selector: 'app-wishlist',
  imports: [],
  
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  constructor(
    private sidebar: SidebarService
  ){}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
