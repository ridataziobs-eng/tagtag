import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
    imports: []
})
export class ProductDetailsComponent {
  public routes = routes;
 
}
