import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private http = inject(HttpClient)
  private filter = "all"

  filteredItems = Promise.resolve(this.items).then(res => res.filter(i => i.type === this.filter || this.filter === 'all'))
  
  get items(): Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(environment.apiUrl))
  }

  getFilteredInventory() {
    return this.filteredItems
  }

  filterItems(type: string) {
    this.filter = type
    this.filteredItems = Promise.resolve(this.items).then(res => res.filter(i => i.type === this.filter || this.filter === 'all'))
  }

  updateSort(sort: string) {
    if(sort === 'price') {
      this.filteredItems = Promise.resolve(this.items).then(res => res.sort((a,b) => a.price - b.price))
    } else {
      this.filteredItems = Promise.resolve(this.items).then(res => res.sort((a,b) => a.name.localeCompare(b.name)))
    }
  }
}
