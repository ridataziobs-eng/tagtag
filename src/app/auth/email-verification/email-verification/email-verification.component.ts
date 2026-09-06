import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-email-verification',
    templateUrl: './email-verification.component.html',
    styleUrl: './email-verification.component.scss',
    imports: [FormsModule,CommonModule,RouterLink]
})
export class EmailVerificationComponent {
  public routes = routes;
  value : any
    constructor(private router: Router) {}
  
    navigation() {
      this.router.navigate([routes.resetPassword])
    }
  
}
