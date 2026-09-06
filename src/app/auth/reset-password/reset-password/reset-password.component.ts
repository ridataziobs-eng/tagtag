import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss',
    imports: [RouterLink,FormsModule,CommonModule]
})
export class ResetPasswordComponent {
  public routes = routes;
  public password : boolean[] = [false];

  public togglePassword(index: number){
    this.password[index] = !this.password[index]
  }
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.success])
  }
}
