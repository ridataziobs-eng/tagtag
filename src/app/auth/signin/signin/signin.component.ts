import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.scss',
    imports: [RouterLink,CommonModule,FormsModule]
})
export class SigninComponent {
  public routes = routes;
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.index])
  }
  public password : boolean[] = [false];

  public togglePassword(index: number){
    this.password[index] = !this.password[index]
  }
}
