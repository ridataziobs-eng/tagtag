import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../core/core.index';


@Component({
    selector: 'app-form-wizard',
    templateUrl: './form-wizard.component.html',
    styleUrls: ['./form-wizard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [StepperModule,ButtonModule,CommonModule,FormsModule,ReactiveFormsModule,MatProgressBarModule,MatStepperModule,MatFormFieldModule,  MatInputModule,RouterLink]
})
export class FormWizardComponent {
  public routes = routes;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  }
}
