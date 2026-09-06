import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-icon-simpleline',
    templateUrl: './icon-simpleline.component.html',
    styleUrls: ['./icon-simpleline.component.scss'],
    imports: [RouterLink]
})
export class IconSimplelineComponent {
  public routes = routes;

   

   
}
