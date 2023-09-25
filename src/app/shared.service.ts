// shared.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isVisibleMap: Map<number, boolean> = new Map<number, boolean>();

  toggleVisibility(index: number): void {
    this.isVisibleMap.set(index, !this.isVisibleMap.get(index));
  }

  getVisibility(index: number): boolean {
    return this.isVisibleMap.get(index) || false;
  }

  hideAllExcept(index: number): void {
    this.isVisibleMap.forEach((_, key) => {
      if (key !== index) {
        this.isVisibleMap.set(key, false);
      }
    });
  }
}
