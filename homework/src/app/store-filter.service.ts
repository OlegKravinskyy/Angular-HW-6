import { Injectable } from '@angular/core';

interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class StoreFilterService {
  products = [
    {
      id: 1,
      name: 'product 1',
      price: 110,
      description: 'product1 text description',
    },

    {
      id: 2,
      name: 'product 2',
      price: 120,
      description: 'product2 text description',
    },

    {
      id: 3,
      name: 'product 3',
      price: 130,
      description: 'product3 text description',
    },
  ];

  constructor() {}

  filterProducts(products: Products[], filterText: string): Products[] {
    const filter = filterText.toLocaleLowerCase();
    return products.filter((product) =>
      product.name.toLocaleLowerCase().includes(filter)
    );
  }
}
