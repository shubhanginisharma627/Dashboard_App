import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionsComponent } from './sections/sections.component';
import { HomeComponent } from './sections/home/home.component';
import { ServicesComponent } from './sections/services/services.component';
import { AboutusComponent } from './sections/aboutus/aboutus.component';
import { CourseComponent } from './sections/course/course.component';
import { InstructorComponent } from './sections/instructor/instructor.component';
import { FaqComponent } from './sections/faq/faq.component';

import { CardsComponent } from './sections/services/cards/cards.component';
import { InformationComponent } from './sections/information/information.component';
import { CardComponent } from './sections/course/card/card.component';
import { DropdownComponent } from './sections/aboutus/dropdown/dropdown.component';
import { FaqDropdownComponent } from './sections/faq/faq-dropdown/faq-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './sections/aboutus/intro/intro.component';
import { ScrollService } from './scroll.service';
import { PopupComponent } from './header/popup/popup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionsComponent,
    HomeComponent,
    ServicesComponent,
    AboutusComponent,
    CourseComponent,
    InstructorComponent,
    FaqComponent,
    CardsComponent,
    InformationComponent,
    CardComponent,
    DropdownComponent,
    FaqDropdownComponent,
    IntroComponent,
    PopupComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
