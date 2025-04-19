import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { HeroSectionComponent } from './features/home/hero-section/hero-section.component';
import { FeaturesSectionComponent } from './features/home/features-section/features-section.component';
import { DoctorsSectionComponent } from './features/home/doctors-section/doctors-section.component';
import { TestimonialsSectionComponent } from './features/home/testimonials-section/testimonials-section.component';
import { CtaSectionComponent } from './features/home/cta-section/cta-section.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    DoctorsSectionComponent,
    TestimonialsSectionComponent,
    CtaSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }