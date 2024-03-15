import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') item: Item | null = null

  constructor(private readonly cartService: CartService) {}

  addToCart(item: Item) {
    this.cartService.addItem(item)
  }
}
