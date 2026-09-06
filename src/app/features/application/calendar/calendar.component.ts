import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';


import { routes, SidebarService } from '../../../core/core.index';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { CustomCalendarComponent } from '../../common/custom-calendar/custom-calendar.component';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule,DatePickerModule,FormsModule,BsDatepickerModule,DateRangePickerComponent,CustomCalendarComponent]
})
export class CalendarComponent {
  routes = routes
  showEventDetailsModal = false;
  eventDetails = { title: '' };
  date: Date[] | undefined;
  dropdownOpen = false;
  selectedTime: Date = new Date();
  addtime2: Date | undefined;
  addtime: Date | undefined;
  time: Date[] | undefined; 
  time2: Date[] | undefined; 
  bsInlineValue = new Date()
  constructor(private sidebar: SidebarService) {}

  ngOnInit(): void {}
    // Open the dropdown
    openDropdown() {
      this.dropdownOpen = true;
    }

    // Close the dropdown
    closeDropdown() {
      this.dropdownOpen = false;
    }

    // Update displayed time when selection changes
    onTimeChange() {
      this.closeDropdown(); // Close dropdown after time selection
    }
  ngAfterViewInit(): void {
    // Initialize external draggable events
    const containerEl = document.getElementById('external-events');
  

    // Initialize FullCalendar
    const calendarEl = document.getElementById('calendar');
   

    
  }

  handleEventDetailsClose() {
    this.showEventDetailsModal = false;
  }
  
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
