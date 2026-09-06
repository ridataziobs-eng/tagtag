import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-alerts',
    templateUrl: './ui-alerts.component.html',
    styleUrls: ['./ui-alerts.component.scss'],
    imports: [RouterLink]
})
export class UiAlertsComponent {
  public routes = routes;
}
