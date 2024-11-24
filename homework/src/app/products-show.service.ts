import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsShowService {
  private products: string[] = [
    'product1',
    'product2',
    'product3',
    'product4',
    'product5',
  ];

  constructor() {}

  getProducts(): string[] {
    return this.products;
  }
}
