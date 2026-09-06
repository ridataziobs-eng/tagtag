import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonService, routes } from '../../../core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-common-counter',
  templateUrl: './common-counter.component.html',
  styleUrl: './common-counter.component.scss',
  imports: [CommonModule,FormsModule],
})
export class CommonCounterComponent {
  routes =routes;
  base = '';
  page = '';
  last = '';
  activePath='';
  constructor(
    private common: CommonService,
  ) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
  }
  @Input() value: number = 1; // Default value if not provided
  @Output() quantityChange = new EventEmitter<number>();
  quantity: number = 1; // Default quantity


  ngOnInit(): void {
    this.quantity = this.value; // Set quantity from value input
  }
  incrementQuantity(): void {
    if (this.quantity>=100){
      this.quantity=100;
    }
    else{
    this.quantity = Number(this.quantity) + 1;
    }
  }

  // Decrement the quantity, but not below 0
  decrementQuantity(): void {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }
  validateQuantity(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;

    // Check if the input is a valid number
    if (!/^\d*$/.test(inputValue)) {
      this.quantity = 0; // Reset to 0 if invalid
    } else {
      this.quantity = Number(inputValue); // Convert valid input to a number
    }
  }
}
