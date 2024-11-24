import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StoreFilterService } from '../store-filter.service';

interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  products: Products[] = [];
  filteredProducts: Products[] | undefined = [];
  filterText: string = '';

  @ViewChild('filterInput') filterInput?: ElementRef;

  constructor(private productsFilterService: StoreFilterService) {}

  ngOnInit(): void {
    this.products = this.productsFilterService.products;
    this.filteredProducts = this.products;
  }

  filterProducts(): void {
    this.filteredProducts = this.productsFilterService.filterProducts(
      this.products,
      this.filterText
    );
    console.log(this.filteredProducts);
  }

  onSend(): void {
    console.log('Sent:', this.filterText);
  }
}
