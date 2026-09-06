import { Component } from '@angular/core';
import { routes } from '../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-success-3',
    templateUrl: './success-3.component.html',
    styleUrl: './success-3.component.scss',
    imports: [RouterLink]
})
export class Success3Component {
  public routes = routes 

}
