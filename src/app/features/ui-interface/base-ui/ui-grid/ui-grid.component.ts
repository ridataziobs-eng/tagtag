import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-grid',
    templateUrl: './ui-grid.component.html',
    styleUrls: ['./ui-grid.component.scss'],
    imports: [RouterLink]
})
export class UiGridComponent {
  public routes = routes;
}
