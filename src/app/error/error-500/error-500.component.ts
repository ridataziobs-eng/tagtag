import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../core/core.index';

@Component({
  selector: 'app-error-500',
  imports: [RouterLink],
  templateUrl: './error-500.component.html',
  styleUrl: './error-500.component.scss'
})
export class Error500Component {
routes=routes
}
