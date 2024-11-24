import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySortsComponent } from './array-sorts.component';

describe('ArraySortsComponent', () => {
  let component: ArraySortsComponent;
  let fixture: ComponentFixture<ArraySortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArraySortsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraySortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
