import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';

@Component({
    selector: 'app-success-2',
    templateUrl: './success-2.component.html',
    styleUrl: './success-2.component.scss',
    imports: [RouterLink]
})
export class Success2Component {
  public routes = routes

}
