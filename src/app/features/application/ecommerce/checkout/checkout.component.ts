import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/core.index';
import { CommonCounterComponent } from '../../../common/common-counter/common-counter.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-checkout',
  imports: [CommonCounterComponent,MatSelectModule],
  
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  constructor(
    private sidebar: SidebarService
  ){}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
