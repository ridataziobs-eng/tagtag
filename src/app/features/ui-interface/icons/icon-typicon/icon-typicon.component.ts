import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-icon-typicon',
    templateUrl: './icon-typicon.component.html',
    styleUrls: ['./icon-typicon.component.scss'],
    imports: [RouterLink]
})
export class IconTypiconComponent {
  public routes = routes;

   

   
}
