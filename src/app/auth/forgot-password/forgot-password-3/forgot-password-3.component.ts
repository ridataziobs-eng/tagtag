import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';

@Component({
    selector: 'app-forgot-password-3',
    templateUrl: './forgot-password-3.component.html',
    styleUrl: './forgot-password-3.component.scss',
    imports: [RouterLink]
})
export class ForgotPassword3Component {
  public routes = routes;

  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.signIn3])
  }
}
