import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-borders',
    templateUrl: './ui-borders.component.html',
    styleUrls: ['./ui-borders.component.scss'],
    imports: [RouterLink]
})
export class UiBordersComponent {
  public routes = routes;
}
