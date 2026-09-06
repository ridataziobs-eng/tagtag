import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-icon-themify',
    templateUrl: './icon-themify.component.html',
    styleUrls: ['./icon-themify.component.scss'],
    imports: [RouterLink]
})
export class IconThemifyComponent {
  public routes = routes;

   

   
}
