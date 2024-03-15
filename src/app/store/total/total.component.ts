import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(private readonly cartService: CartService) {}

  getTotal(): string {
    return this.cartService.getTotal()
  }
}
