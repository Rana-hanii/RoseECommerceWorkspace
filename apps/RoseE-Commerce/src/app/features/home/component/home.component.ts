import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductCardService } from '../../../core/services/product-card/product-card.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly productCardService = inject(ProductCardService);

  loadProducts() {
    this.productCardService.getAllProduct().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }
}
