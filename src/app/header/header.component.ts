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
    console.log(this.scrollService.getActiveSectionId(),"sessionId")
    return sectionId === this.scrollService.getActiveSectionId();
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    // Check if the user has scrolled
    this.isScrolled = window.scrollY > 0;
    const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY;
  const sectionsArray = Array.from(sections);
  for (const section of sectionsArray) {
    const sectionId = section.getAttribute('id');
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 70) {
      this.scrollService.setActiveSectionId(sectionId);
    }
  }
  }
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);

     this.scrollService.setActiveSectionId(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
