import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-icon-feather',
    templateUrl: './icon-feather.component.html',
    styleUrls: ['./icon-feather.component.scss'],
    imports: [RouterLink]
})
export class IconFeatherComponent {
  public routes = routes;

   

 

}
