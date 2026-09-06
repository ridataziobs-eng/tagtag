import { AfterViewInit, Component } from '@angular/core';
import { videocall } from '../../../../shared/model/page.model';
import { SidebarService } from '../../../../core/core.index';
import { CommonModule } from '@angular/common';

export interface videocallModel {
  img: string;
  name: string;
}
@Component({
    selector: 'app-video-call',
    templateUrl: './video-call.component.html',
    styleUrl: './video-call.component.scss',
    imports: [CommonModule]
})
export class VideoCallComponent {
  isChatSearchVisible: boolean = false; 
  isChatUser:boolean=false;
  public videocall: videocall[] = [];
  public sidebarData: Array<videocallModel> = [];

  constructor(private sidebar: SidebarService) {
    this.sidebarData = this.sidebar.videocall;
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

  isMicOn = true;
  toggleMicrophone(): void {
    this.isMicOn = !this.isMicOn;
  }
  toggleChatSearch() {
    this.isChatSearchVisible = !this.isChatSearchVisible;
  }
  toggleuser(){
    this.isChatUser=!this.isChatUser;
  }
  toggleclose(){
    this.isChatSearchVisible=false;
  }
  elem = document.documentElement;
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  
}
