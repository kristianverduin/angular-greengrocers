import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent {
  constructor(private readonly storeService: StoreService) {}
  
  getFilteredInventory(): Promise<Item[]> {
    return this.storeService.getFilteredInventory()
  }
}
