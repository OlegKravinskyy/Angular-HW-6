import { TestBed } from '@angular/core/testing';

import { ArraySortsService } from './array-sorts.service';

describe('ArraySortsService', () => {
  let service: ArraySortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraySortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
