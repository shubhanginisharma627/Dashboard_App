import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() items: any[]=[];
  @Input() index: any;
  isVisible: boolean[] = []; // Initial state is hidden

   constructor() {
    this.isVisible = new Array(this.items.length).fill(false);
   }

  toggleVisibility(i:number): void {
    this.isVisible[i] = !this.isVisible[i];
    for (let j = 0; j < this.isVisible.length; j++) {
      if (j !== i) {
        this.isVisible[j] = false;
      } 
    }
  }
}
