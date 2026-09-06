import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-icon-weather',
    templateUrl: './icon-weather.component.html',
    styleUrls: ['./icon-weather.component.scss'],
    imports: [RouterLink]
})
export class IconWeatherComponent {
  public routes = routes;

   

   
}
