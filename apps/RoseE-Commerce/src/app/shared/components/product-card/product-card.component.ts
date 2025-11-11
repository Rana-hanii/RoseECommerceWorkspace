import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardService } from '../../../core/services/product-card/product-card.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent   {
  // private readonly productCardService = inject(ProductCardService);

  // products() {
  //   this.productCardService.getAllProduct().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //   });
  // }

  // ngOnInit(): void {
  //   this.products();
  // }
}
