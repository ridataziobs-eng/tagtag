import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-cards',
    templateUrl: './ui-cards.component.html',
    styleUrls: ['./ui-cards.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class UiCardsComponent {
  public routes = routes;
  isCardFullscreen = false;

  toggleFullscreen() {
    this.isCardFullscreen = !this.isCardFullscreen;
  }
  isCardVisible = true;

  toggleCardVisibility() {
    this.isCardVisible = !this.isCardVisible;
  }
}
