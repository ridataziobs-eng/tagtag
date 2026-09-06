import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-accordion',
    templateUrl: './ui-accordion.component.html',
    styleUrls: ['./ui-accordion.component.scss'],
    imports: [RouterLink]
})
export class UiAccordionComponent {
  public routes = routes;
}
