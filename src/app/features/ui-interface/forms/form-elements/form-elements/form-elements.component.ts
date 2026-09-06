import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';

@Component({
    selector: 'app-form-elements',
    templateUrl: './form-elements.component.html',
    styleUrl: './form-elements.component.scss',
    imports: []
})
export class FormElementsComponent {
  public routes = routes;
}
