import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../shared/components/sectionTitle/sectionTitle.component";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SectionTitleComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
