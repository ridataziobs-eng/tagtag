import { Component } from '@angular/core';

import { NavigationEnd, NavigationStart, Router, Event as RouterEvent, RouterLink, RouterLinkActive } from '@angular/router';
import { routes, SidebarService } from '../../../core/core.index';
import { menu, sidebarData, sidebarDataone, url } from '../../../shared/model/sidebar.model';
import { CommonModule } from '@angular/common';
import { NgScrollbar } from 'ngx-scrollbar';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';


interface MenuItem {
  menuValue: string;
  showSubRoute: boolean;
  menu: SubMenu[];
}

interface SubMenu {
  menuValue: string;
  showSubRoute: boolean;
}


@Component({
    selector: 'app-sidebar-one',
    templateUrl: './sidebar-one.component.html',
    styleUrls: ['./sidebar-one.component.scss'],
    imports: [RouterLink,CommonModule,NgScrollbar,RouterLinkActive],
})
export class SidebarOneComponent {
  routes = routes;
  base = '';
  page = '';
  currentUrl = '';


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public side_bar_data: Array<any> = [];

  constructor(
    private Router: Router,
    private sidebar: SidebarService,
    private router: Router
  ) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.side_bar_data = this.sidebar.sidebarData1;
  }

  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentUrl = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  // expandSubMenus(menu: MenuItem): void {
  //   sessionStorage.setItem('menuValue', menu.menuValue);
  //   this.side_bar_data.forEach((mainMenus: MenuItem) => {
  //     mainMenus.menu.forEach((resMenu: SubMenu) => {
  //       if (resMenu.menuValue === menu.menuValue) {
  //         menu.showSubRoute = !menu.showSubRoute;
  //       } else {
  //         resMenu.showSubRoute = false;
  //       }
  //     });
  //   });
  // }
  expandSubMenus(menu: MenuItem): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.forEach((mainMenus: MenuItem) => {
      mainMenus.menu.forEach((resMenu: SubMenu) => {
        if (resMenu.menuValue === menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
          this.openMenuItem = null;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  isOpen=false;
  public expandSubMenusActive(): void {
    let activeMenu = sessionStorage.getItem('menuValue');
    let activePage = sessionStorage.getItem('page');

    // Fallback if sessionStorage is null
    if (!activeMenu || !activePage) {
      const currentUrl = this.router.url;
      if (currentUrl.includes('/index') || currentUrl === '/') {
        activeMenu = activeMenu || 'Dashboard';
        activePage = activePage || 'index';
        sessionStorage.setItem('menuValue', activeMenu);
        sessionStorage.setItem('page', activePage);
      }
    }

    if (!Array.isArray(this.side_bar_data)) {
      console.warn('Sidebar data not initialized or not an array:', this.side_bar_data);
      return;
    }

    let foundActiveSubmenu = false;

    this.side_bar_data.forEach((mainMenu: sidebarDataone) => {
      mainMenu.menu.forEach((resMenu: menu) => {
        resMenu.showSubRoute = resMenu.menuValue === activeMenu;
        if (resMenu.subMenus && Array.isArray(resMenu.subMenus)) {
          resMenu.subMenus.forEach((sub) => {
            sub.showSubRoute = sub.base === activePage || sub.page === activePage;
            if (sub.showSubRoute) {
              foundActiveSubmenu = true;
              resMenu.showSubRoute = true; // Ensure parent menu is open
            }
          });
        }
      });
    });

    if (foundActiveSubmenu) {
      this.isOpen = true; // Open sidebar if submenu is found
    }
    if (!foundActiveSubmenu && activePage === 'index') {
      console.warn(`No submenu found with base or page matching 'index'`);
    }
    else{
      this.isOpen =false;
    }

  }
  openMenuItem: MenuItem | null = null;
  openSubmenuOneItem: SubMenu[] | null = null;
  multiLevel1 = false;
  multiLevel2 = false;
  multiLevel3 = false;

  openMenu(menu: MenuItem): void {
    if (this.openMenuItem === menu) {
      this.openMenuItem = null;
    } else {
      this.openMenuItem = menu;
      menu.showSubRoute = false;
    }
  }
  
  openSubmenuOne(subMenus: SubMenu[]): void {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }

  multiLevelOne() {
    this.multiLevel1 = !this.multiLevel1;
  }
  multiLevelTwo() {
    this.multiLevel2 = !this.multiLevel2;
  }
  multiLevelThree() {
    this.multiLevel3 = !this.multiLevel3;
  }
  public toggleSidebar(): void {
    this.sidebar.switchSideMenuPosition();
  }
  ngOnInit(): void {

  if(this.page === 'index'){
    this.expandSubMenusActive();
  }
  this.isOpen =false;
  
}
}
