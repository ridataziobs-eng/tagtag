import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-dropdowns',
    templateUrl: './ui-dropdowns.component.html',
    styleUrls: ['./ui-dropdowns.component.scss'],
    imports: [RouterLink]
})
export class UiDropdownsComponent {
  public routes = routes;
}
