import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsFilterService {
  constructor() {}

  filterProducts(products: string[], filterText: string): string[] | undefined {
    const filter = filterText.toLocaleLowerCase();
    return products.filter((product) =>
      product.toLocaleLowerCase().includes(filter)
    );
  }
}
