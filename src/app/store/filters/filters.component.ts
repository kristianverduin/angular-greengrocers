import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  constructor(private readonly storeService: StoreService) {}

  filterItems(type: string) {
    this.storeService.filterItems(type)
  }
}
