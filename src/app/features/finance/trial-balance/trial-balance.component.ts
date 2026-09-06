import { Component } from '@angular/core';
import { SidebarService } from '../../../core/core.index';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trial-balance',
  templateUrl: './trial-balance.component.html',
  styleUrls: ['./trial-balance.component.scss'],
  imports: [BsDatepickerModule,FormsModule,CommonModule]
})
export class TrialBalanceComponent {
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  isCollapsed: boolean = false;
  constructor(private sidebar:SidebarService){
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
