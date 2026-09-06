import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
interface data {
  value: string;
}
@Component({
    selector: 'app-form-vertical',
    templateUrl: './form-vertical.component.html',
    styleUrls: ['./form-vertical.component.scss'],
    imports: [MatSelectModule,FormsModule,RouterLink]
})
export class FormVerticalComponent {
  public routes = routes;
  public selectedValue1 = ''
  public selectedValue2 = '' ;
  public selectedValue3 = '' ;


  selectedList1: data[] = [
    {value: 'Select'},
    {value: 'A+'},
    {value: 'O+'},
    {value: 'B+'},
    {value: 'AB+'},
  ];
  selectedList2: data[] = [
    {value: 'Select State'},
    {value: 'California'},
    {value: 'Texas'},
    {value: 'Florida'},
  ];
  selectedList3: data[] = [
    {value: 'Select Country'},
    {value: 'USA'},
    {value: 'France'},
    {value: 'India'},
    {value: 'Spain'},
  ];
   

 

}
