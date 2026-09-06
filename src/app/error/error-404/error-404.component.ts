import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../core/core.index';

@Component({
  selector: 'app-error-404',
  imports: [RouterLink],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss'
})
export class Error404Component {
routes=routes
}
