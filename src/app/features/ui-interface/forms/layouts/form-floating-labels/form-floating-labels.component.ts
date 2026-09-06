import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-floating-labels',
    templateUrl: './form-floating-labels.component.html',
    styleUrl: './form-floating-labels.component.scss',
    imports: [RouterLink]
})
export class FormFloatingLabelsComponent {
  public routes = routes;
}
