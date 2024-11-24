import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsShowService } from '../products-show.service';
import { ProductsFilterService } from '../products-filter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: string[] = [];
  filteredProducts: string[] | undefined = [];
  filterText: string = '';

  @ViewChild('filterInput') filterInput?: ElementRef;

  constructor(
    private productsShowService: ProductsShowService,
    private productsFilterService: ProductsFilterService
  ) {}

  ngOnInit(): void {
    this.products = this.productsShowService.getProducts();
    this.filteredProducts = this.products;
  }

  filterProducts(): void {
    this.filteredProducts = this.productsFilterService.filterProducts(
      this.products,
      this.filterText
    );
  }

  onSend(): void {
    console.log('Sent:', this.filterText);
  }
}
