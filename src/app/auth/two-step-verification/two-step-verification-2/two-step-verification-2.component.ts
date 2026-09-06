import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';
import { InputOtp } from 'primeng/inputotp';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-two-step-verification-2',
    templateUrl: './two-step-verification-2.component.html',
    styleUrl: './two-step-verification-2.component.scss',
    imports: [InputOtp,CommonModule,FormsModule,RouterLink]
})
export class TwoStepVerification2Component {
  public routes = routes;
  value:any;
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.resetPassword2])
  }
}
