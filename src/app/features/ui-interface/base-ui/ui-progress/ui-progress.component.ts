import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-progress',
    templateUrl: './ui-progress.component.html',
    styleUrls: ['./ui-progress.component.scss'],
    imports: [RouterLink]
})
export class UiProgressComponent {
  public routes = routes;
}
