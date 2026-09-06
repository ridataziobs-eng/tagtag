import { Component } from '@angular/core';
import { routes } from '../../../../core/helpers/routes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tables-basic',
    templateUrl: './tables-basic.component.html',
    styleUrls: ['./tables-basic.component.scss'],
    imports: [RouterLink]
})
export class TablesBasicComponent {
  public routes = routes;
}
