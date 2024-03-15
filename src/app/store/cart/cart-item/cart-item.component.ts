import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item: Item | null = null
  @Output() decrementQuantity: EventEmitter<Item> = new EventEmitter<Item>()

  constructor(private readonly cartService: CartService) {}

  incrementQuantity(item: Item) {
    this.cartService.incrementQuantity(item)
  }

  decrement(item: Item) {
    this.decrementQuantity.emit(item)
  }
}
