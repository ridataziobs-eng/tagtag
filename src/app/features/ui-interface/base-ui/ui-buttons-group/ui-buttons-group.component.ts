import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-buttons-group',
    templateUrl: './ui-buttons-group.component.html',
    styleUrls: ['./ui-buttons-group.component.scss'],
    imports: [RouterLink]
})
export class UiButtonsGroupComponent {
  public routes = routes;
}
