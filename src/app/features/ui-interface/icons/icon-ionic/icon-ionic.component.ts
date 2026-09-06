import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-icon-ionic',
    templateUrl: './icon-ionic.component.html',
    styleUrls: ['./icon-ionic.component.scss'],
    imports: [RouterLink]
})
export class IconIonicComponent {
  public routes = routes;

   

 

}
