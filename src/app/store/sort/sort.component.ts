import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  constructor(private readonly storeService: StoreService) {}

  updateSort(sorting: string) {
    this.storeService.updateSort(sorting)
  }
}
