import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';
import { NgxMaskModule } from 'ngx-mask';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-form-mask',
    templateUrl: './form-mask.component.html',
    styleUrls: ['./form-mask.component.scss'],
    imports: [NgxMaskModule]
})
export class FormMaskComponent{
  public routes = routes;
  
}
