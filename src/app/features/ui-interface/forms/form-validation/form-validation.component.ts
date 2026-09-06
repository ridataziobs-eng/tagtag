import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-validation',
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterLink]
})
export class FormValidationComponent {
  public routes = routes;
}
