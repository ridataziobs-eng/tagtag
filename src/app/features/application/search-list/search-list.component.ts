import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { routes, SidebarService } from '../../../core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { NgxEditorModule } from 'ngx-editor';
import { CustomPaginationComponent } from '../../../shared/custom-pagination/custom-pagination.component';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { RouterLink } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss',
  imports: [MatSelectModule,NgxEditorModule,LightgalleryModule],
})
export class SearchListComponent {
  routes=routes
    private lightGallery!: LightGallery;
    private needRefresh = false;
    settings = {
      counter: false,
      plugins: [lgZoom, lgVideo],
    };
  constructor(
    private sidebar: SidebarService
  ){}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { index, prevIndex } = detail;
  };
}
