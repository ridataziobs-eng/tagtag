import { Component, ViewChild } from '@angular/core';
import { BsDatepickerConfig, BsDatepickerDirective, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SidebarService } from '../../../core/core.index';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrls: ['./annual-report.component.scss'],
  imports: [CommonModule,MatSelectModule ,FormsModule,MatSortModule,BsDatepickerModule]
})
export class AnnualReportComponent {
  isCollapsed: boolean = false;
  @ViewChild(BsDatepickerDirective, { static: false })
  datepicker?: BsDatepickerDirective;
  bsConfig: Partial<BsDatepickerConfig>;
  selectedYear: Date | undefined;
  constructor(private sidebar:SidebarService){
    this.selectedYear = new Date(new Date().getFullYear(), 0, 1);
    this.bsConfig = {
      minMode: 'year',
      dateInputFormat: 'YYYY', // Display only the year in the input
    };
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
