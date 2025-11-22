import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Product} from '../../interfaces/products';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RatingModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent  {

  products: Product[] = [];
  value!: number;

  isNew(date: string) {
    const days =
      (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
    return days <= 300;
  }

  calculateDiscountPercentage(
    originalPrice: number,
    discountedPrice: number
  ): number {
    return Math.round(
      ((originalPrice - discountedPrice) / originalPrice) * 100
    );
  }
}
