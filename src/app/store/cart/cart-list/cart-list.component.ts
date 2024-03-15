import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  constructor(private readonly cartService: CartService) {}
  items = this.cartService.items

  decrementQuantity(item: Item) {
    this.cartService.decrementQuantity(item)
    this.items = this.cartService.getItems()
  }
}
