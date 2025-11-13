import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsUIComponent } from "../benefitsUI/benefitsUI.component";

@Component({
  selector: 'app-benefits-section',
  imports: [CommonModule, BenefitsUIComponent],
  templateUrl: './BenefitsSection.component.html',
  styleUrl: './BenefitsSection.component.scss',
})
export class BenefitsSectionComponent {}
