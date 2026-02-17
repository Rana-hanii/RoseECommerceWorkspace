import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { LowStockProduct } from '../../interface/iproducts';

@Component({
  selector: 'app-low-stock',
  imports: [CommonModule],
  templateUrl: './lowStock.component.html',
  styleUrl: './lowStock.component.scss',
})
export class LowStockComponent implements OnInit {
  private readonly _home = inject(HomeService);
  lowStock!: LowStockProduct[];
  ngOnInit(): void {
    this.getLowStock();
  }

  getLowStock(): void {
    this._home.getProducts().subscribe({
      next: (res) => {
        this.lowStock = res.statistics.lowStockProducts.sort(
          (a, b) => a.quantity - b.quantity
        );
      },
    });
  }
}
