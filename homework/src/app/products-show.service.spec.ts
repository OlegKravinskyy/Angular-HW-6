import { TestBed } from '@angular/core/testing';

import { ProductsShowService } from './products-show.service';

describe('ProductsShowService', () => {
  let service: ProductsShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
