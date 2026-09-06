import { Component } from '@angular/core';
import { routes } from '../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrl: './success.component.scss',
    imports: [RouterLink]
})
export class SuccessComponent {
  public routes = routes
}
