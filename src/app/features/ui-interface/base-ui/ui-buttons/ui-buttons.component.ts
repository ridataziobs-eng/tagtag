import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-buttons',
    templateUrl: './ui-buttons.component.html',
    styleUrls: ['./ui-buttons.component.scss'],
    imports: [RouterLink]
})
export class UiButtonsComponent {
  public routes = routes;
}
