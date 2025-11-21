import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsUIComponent } from "../benefitsUI/benefitsUI.component";
import { BenifitsInterface } from 'apps/RoseE-Commerce/src/app/shared/interfaces/benifits-card/benifits-interface';




@Component({
  selector: 'app-benefits-section',
  imports: [CommonModule, BenefitsUIComponent],
  templateUrl: './BenefitsSection.component.html',
  styleUrl: './BenefitsSection.component.scss',
})
export class BenefitsSectionComponent { 

 benifitsCard:BenifitsInterface[]=[
  {
    icon: "pi-truck",
    title: "Free Delivery",
    description: "For orders above 120 EGP"
  },
  {
    icon: "pi-sync",
    title: "Get Refund",
    description: "Refunds within 30 days"
  },
  {
    icon: "pi-shield",
    title: "Safe Payment",
    description: "100% Secure Payment"
  },
  {
    icon: "pi-headphones",
    title: "24/7 Support",
    description: "Contact us at any time"
  }
 ]

}
