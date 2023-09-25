import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-faq-dropdown',
  templateUrl: './faq-dropdown.component.html',
  styleUrls: ['./faq-dropdown.component.css']
})
export class FaqDropdownComponent {
  @Input() item: any;

  
  isVisible: boolean=false; // Initial state is hidden
  
   

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    
  }
}
