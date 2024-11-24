import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArraySortsService {
  private arrayOfNumbers: number[] = [5, 6, -15, 25, 48, 0, 64, -100];

  constructor() {}

  getOriginalArray() {
    return [...this.arrayOfNumbers];
  }

  onSortAscending(): number[] {
    const sortedAscendingArray = [...this.arrayOfNumbers];

    return sortedAscendingArray.sort((a, b) => a - b);
  }

  onSortDescending(): number[] {
    const sortedDescendingArray = [...this.arrayOfNumbers];

    return sortedDescendingArray.sort((a, b) => b - a);
  }

  onFindMaxNumber(): number {
    const maxNumber = Math.max(...this.arrayOfNumbers);
    return maxNumber;
  }
}
