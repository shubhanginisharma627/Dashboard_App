import { Component,HostListener,OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private scrollService: ScrollService) { }
  isScrolled = false;
  ngOnInit(): void {
  }
   isActive(sectionId: string): boolean {
    return sectionId === this.scrollService.getActiveSectionId();
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    // Check if the user has scrolled
    this.isScrolled = window.scrollY > 0;
  }
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
