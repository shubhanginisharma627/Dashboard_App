import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private scrollService: ScrollService, private breakpointObserver: BreakpointObserver) { }
  isScrolled = false;
  isSmallScreen = false;
  isPopupOpen = false;
  popupPosition = { top: '0', left: '0' };
  ngOnInit(): void {
    // Detect small screen using BreakpointObserver
    this.breakpointObserver.observe([Breakpoints.Small,Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }
  isActive(sectionId: string): boolean {
    console.log(this.scrollService.getActiveSectionId(), "sessionId")
    return sectionId === this.scrollService.getActiveSectionId();
  }
  openPopup(): void {
    this.isPopupOpen = !this.isPopupOpen;
    console.log(this.isPopupOpen)
    if (this.isPopupOpen) {
      // Calculate the position based on the navbar's dimensions
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        this.popupPosition = {
          top: `${navbarRect.bottom}px`,
          left: `${navbarRect.left}px`,
        };
      }
    }
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
