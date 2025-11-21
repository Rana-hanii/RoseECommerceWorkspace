import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from "../shared/main-title/main-title.component";

@Component({
  selector: 'app-about-section',
  imports: [CommonModule, MainTitleComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {

  features = [
  'Competitive Prices & Easy Shopping',
  'Premium Quality & Elegant Packaging',
  'Perfect for Every Occasion',
  'Fast & Reliable Delivery'
];

}
