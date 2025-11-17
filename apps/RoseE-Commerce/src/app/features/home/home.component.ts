import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellingComponent } from './components/bestSelling/bestSelling.component';
import { BenefitsSectionComponent } from './components/BenefitsSection/BenefitsSection.component';
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { SectionTitleComponent } from "../../shared/components/sectionTitle/sectionTitle.component";
import { AboutSectionComponent } from "./components/about/about-section.component";


@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutSectionComponent, SectionTitleComponent, BestSellingComponent, BenefitsSectionComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
