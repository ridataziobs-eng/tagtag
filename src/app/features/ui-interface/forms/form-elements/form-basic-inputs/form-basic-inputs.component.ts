import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';
import { RouterLink } from '@angular/router';
interface data {
  value: string;
}
@Component({
    selector: 'app-form-basic-inputs',
    templateUrl: './form-basic-inputs.component.html',
    styleUrls: ['./form-basic-inputs.component.scss'],
    imports: [RouterLink]
})
export class FormBasicInputsComponent {
  public routes = routes;
  public selectedValue = '';
  selectedList: data[] = [
    { value: '-- Select --' },
    { value: 'Option 1' },
    { value: 'Option 2' },
    { value: 'Option 3' },
    { value: 'Option 4' },
    { value: 'Option 5' },
  ];
}
