import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-popovers',
    templateUrl: './ui-popovers.component.html',
    styleUrls: ['./ui-popovers.component.scss'],
    imports: [RouterLink]
})
export class UiPopoversComponent {
  public routes = routes;
}
