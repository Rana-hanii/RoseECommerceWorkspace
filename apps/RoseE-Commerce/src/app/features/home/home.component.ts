import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellingComponent } from './components/bestSelling/bestSelling.component';
import { BenefitsSectionComponent } from './components/BenefitsSection/BenefitsSection.component';
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";


@Component({
  selector: 'app-home',
  imports: [CommonModule, BestSellingComponent, BenefitsSectionComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
