import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-icon-material',
    templateUrl: './icon-material.component.html',
    styleUrls: ['./icon-material.component.scss'],
    imports: [RouterLink]
})
export class IconMaterialComponent {
  public routes = routes;

   

 

}
