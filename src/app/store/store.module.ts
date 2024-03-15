import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { TotalComponent } from './total/total.component';
import { FiltersComponent } from './filters/filters.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [ItemListComponent, ItemComponent, TotalComponent, FiltersComponent, SortComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ItemListComponent, TotalComponent, FiltersComponent, SortComponent]
})
export class StoreModule { }
