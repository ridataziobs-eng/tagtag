import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-media',
    templateUrl: './ui-media.component.html',
    styleUrls: ['./ui-media.component.scss'],
    imports: [RouterLink]
})
export class UiMediaComponent {
  public routes = routes;
}
