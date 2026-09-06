
import { Component } from '@angular/core';
import { routes, SidebarService } from '../../../../core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.scss'],
  imports: [CommonModule,RouterLink,TagInputModule,FormsModule,MatSelectModule]
})
export class AllBlogComponent {
  routes=routes

  tags = ['PointOfSale', 'RetailTech', 'POSIntegration'];

  constructor(
    private sidebar: SidebarService
  ){}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

}
