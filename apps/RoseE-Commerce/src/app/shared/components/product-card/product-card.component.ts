import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Product, Products } from '../../interfaces/products';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProductLabelComponent } from '../product-label/product-label.component';
import { HomeService } from '../../../features/home/services/home.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ProductLabelComponent,
    NgOptimizedImage,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  private readonly homeService = inject(HomeService);
  products: Product[] = [];
  value!: number;
  @Input() product!:Product[];

  ngOnInit(): void {
    this.homeService.getMostpopular().subscribe({
      next: (res: Products) => {
        this.products = res.products || [];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
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
