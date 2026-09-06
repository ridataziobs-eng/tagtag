import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-carousel',
    templateUrl: './ui-carousel.component.html',
    styleUrls: ['./ui-carousel.component.scss'],
    imports: [RouterLink]
})
export class UiCarouselComponent {
  public routes = routes;
}
