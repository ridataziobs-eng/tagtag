import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-reset-password-3',
    templateUrl: './reset-password-3.component.html',
    styleUrl: './reset-password-3.component.scss',
    imports: [RouterLink,CommonModule,FormsModule]
})
export class ResetPassword3Component {
  public routes = routes;
  public password : boolean[] = [false];

  public togglePassword(index: number){
    this.password[index] = !this.password[index]
  }
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.success3])
  }
}
