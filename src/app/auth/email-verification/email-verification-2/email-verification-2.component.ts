import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-email-verification-2',
    templateUrl: './email-verification-2.component.html',
    styleUrl: './email-verification-2.component.scss',
    imports: [RouterLink,CommonModule,FormsModule]
})
export class EmailVerification2Component {
  public routes = routes;
  value : any
      constructor(private router: Router) {}
    
      navigation() {
        this.router.navigate([routes.resetPassword2])
      }
}
