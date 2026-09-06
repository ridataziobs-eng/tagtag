import { Component } from '@angular/core';
import { SpinnerService } from '../../../core/core.index';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    imports: [CommonModule],
})
export class LoaderComponent {
loading$!: Observable<boolean>; 
  constructor(public spinner: SpinnerService) {
    
  }
   ngOnInit() {
    this.loading$ = this.spinner.loading$;
  }


 

}
