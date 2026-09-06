import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-pagination',
    templateUrl: './ui-pagination.component.html',
    styleUrls: ['./ui-pagination.component.scss'],
    imports: [RouterLink]
})
export class UiPaginationComponent {
  public routes = routes;
}
