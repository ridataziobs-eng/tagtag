import { Component } from '@angular/core';
import { SidebarService } from '../../../core/service/sidebar/sidebar.service';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-profit-and-loss',
    templateUrl: './profit-and-loss.component.html',
    styleUrls: ['./profit-and-loss.component.scss'],
    imports: [CommonModule,DateRangePickerComponent,MatSelectModule]
})
export class ProfitAndLossComponent {
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor(private sidebar: SidebarService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
