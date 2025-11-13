import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../shared/components/sectionTitle/sectionTitle.component";
import { BestSellingComponent } from "../../shared/components/home-components/bestSelling/bestSelling.component";
import { BenefitsSectionComponent } from "../../shared/components/home-components/BenefitsSection/BenefitsSection.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SectionTitleComponent, BestSellingComponent, BenefitsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
