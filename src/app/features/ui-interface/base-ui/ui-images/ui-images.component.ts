import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-images',
    templateUrl: './ui-images.component.html',
    styleUrls: ['./ui-images.component.scss'],
    imports: [RouterLink]
})
export class UiImagesComponent {
  public routes = routes;
}
