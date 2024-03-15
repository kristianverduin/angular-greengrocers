import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = []
  total: number = 0.0

  getItems(): Item[] {
    return this.items
  }

  addItem(item: Item) {
    const existingItemIndex = this.items.findIndex(i => i.id === item.id)
    if(existingItemIndex >= 0) {
      this.items[existingItemIndex].quantity += 1
    } else {
      this.items.push({...item, quantity: 1})
    }
    this.total += item.price
  }

  incrementQuantity(item: Item) {
    item.quantity += 1
    this.total += item.price
  }

  decrementQuantity(item: Item) {
    item.quantity -= 1
    this.total -= item.price
    if(item.quantity === 0) {
      this.items = this.items.filter(i => i.id !== item.id)
    }
  }

  getTotal(): string {
    // Using absolute to avoid rounding errors (-0.00)
    return Math.abs(this.total).toFixed(2)
  }
}
