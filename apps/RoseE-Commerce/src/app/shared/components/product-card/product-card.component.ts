import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardService } from '../../../core/services/product-card/product-card.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Product, Products } from '../../interfaces/products';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RatingModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  private readonly productCardService = inject(ProductCardService);
  products: Product[] = [];
  value!: number;
  loadProducts() {
    this.productCardService.getAllProduct().subscribe({
      next: (res: Products) => {
        console.log(res);
        this.products = res.products || [];
        // this.value = res.products
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.loadProducts();
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
