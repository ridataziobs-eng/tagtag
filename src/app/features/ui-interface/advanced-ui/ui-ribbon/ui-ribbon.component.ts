import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-ribbon',
    templateUrl: './ui-ribbon.component.html',
    styleUrl: './ui-ribbon.component.scss',
    imports: [RouterLink]
})
export class UiRibbonComponent {
  public routes = routes;
}
