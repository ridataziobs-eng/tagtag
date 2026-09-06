import { Component } from '@angular/core';
import { routes, SidebarService } from '../../../../core/core.index';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from '../../../../shared/custom-pagination/custom-pagination.component';
import { MatSelectModule } from '@angular/material/select';
import { DateRangePickerComponent } from '../../../common/date-range-picker/date-range-picker.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-quantity-alert',
  templateUrl: './product-quantity-alert.component.html',
  styleUrls: ['./product-quantity-alert.component.scss'],
  imports: [CommonModule,CustomPaginationComponent,MatSelectModule,DateRangePickerComponent,RouterLink]
})
export class ProductQuantityAlertComponent {
routes=routes
constructor(private sidebar:SidebarService){}
isCollapsed: boolean = false;
toggleCollapse() {
  this.sidebar.toggleCollapse();
  this.isCollapsed = !this.isCollapsed;
}
}
