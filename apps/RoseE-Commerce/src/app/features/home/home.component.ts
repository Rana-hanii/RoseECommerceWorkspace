import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../shared/components/sectionTitle/sectionTitle.component";
import { AboutSectionComponent } from "./components/about/about-section.component";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { SpecialGiftsItemsComponent } from "./components/specialGiftsItem/SpecialGiftsItems.component";
import { SpecialGiftsSliderComponent } from "./components/specialGiftsSlide/specialGiftsSlider.component";
import { SpecialGiftsComponent } from "./components/specialGifts/specialGifts.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutSectionComponent, SectionTitleComponent, ProductCardComponent, SpecialGiftsItemsComponent, SpecialGiftsSliderComponent, SpecialGiftsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
