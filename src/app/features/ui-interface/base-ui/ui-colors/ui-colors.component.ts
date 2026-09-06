import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-colors',
    templateUrl: './ui-colors.component.html',
    styleUrls: ['./ui-colors.component.scss'],
    imports: [RouterLink]
})
export class UiColorsComponent {
  public routes = routes;
}
