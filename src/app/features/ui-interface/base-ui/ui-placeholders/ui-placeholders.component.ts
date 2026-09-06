import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-placeholders',
    templateUrl: './ui-placeholders.component.html',
    styleUrls: ['./ui-placeholders.component.scss'],
    imports: [RouterLink]
})
export class UiPlaceholdersComponent {
  public routes = routes;
}
