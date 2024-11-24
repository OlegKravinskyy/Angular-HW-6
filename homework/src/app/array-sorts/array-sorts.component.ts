import { Component, OnInit } from '@angular/core';
import { ArraySortsService } from '../array-sorts.service';

@Component({
  selector: 'app-array-sorts',
  templateUrl: './array-sorts.component.html',
  styleUrl: './array-sorts.component.css',
})
export class ArraySortsComponent implements OnInit {
  originalArray: number[] = [];
  sortedAscending: number[] = [];
  sortedDescending: number[] = [];
  maxNumber: number = Number.MIN_VALUE;

  constructor(private arraySortsService: ArraySortsService) {}

  ngOnInit(): void {
    this.originalArray = this.arraySortsService.getOriginalArray();
    // this.sortedAscending = this.arraySortsService.onSortAscending();
    // this.sortedDescending = this.arraySortsService.onSortDescending();
    // this.maxNumber = this.arraySortsService.onFindMaxNumber();
  }

  get arraySorts(): ArraySortsService {
    return this.arraySortsService;
  }
}
