import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-badges',
    templateUrl: './ui-badges.component.html',
    styleUrls: ['./ui-badges.component.scss'],
    imports: [RouterLink]
})
export class UiBadgesComponent {
  public routes = routes;
}
