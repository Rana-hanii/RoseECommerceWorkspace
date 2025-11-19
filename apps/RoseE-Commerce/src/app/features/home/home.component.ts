import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../shared/components/sectionTitle/sectionTitle.component";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { SpecialGiftsComponent } from "./components/specialGifts/specialGifts.component";
import { SpecialGiftsSliderComponent } from "./components/specialGiftsSlide/specialGiftsSlider.component";
import { SpecialGiftsItemsComponent } from "./components/specialGiftsItem/SpecialGiftsItems.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SectionTitleComponent, ProductCardComponent, SpecialGiftsComponent, SpecialGiftsSliderComponent, SpecialGiftsItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
