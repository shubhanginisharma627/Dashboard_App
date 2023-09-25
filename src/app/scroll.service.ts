// scroll.service.ts

import { Injectable, HostListener, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private activeSectionId: string | null = null;

  constructor() { }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section: HTMLElement) => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 70) {
        this.activeSectionId = sectionId;
      }
    });
  }

  getActiveSectionId(): string | null {
    return this.activeSectionId;
  }
}
