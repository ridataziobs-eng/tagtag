import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss',
    imports: [RouterLink]
})
export class ForgotPasswordComponent {
  public routes = routes;
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.signIn])
  }
}
