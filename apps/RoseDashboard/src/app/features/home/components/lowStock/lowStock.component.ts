import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { LowStockProduct } from '../../interface/iproducts';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-low-stock',
  imports: [CommonModule],
  templateUrl: './lowStock.component.html',
  styleUrl: './lowStock.component.scss',
})
export class LowStockComponent implements OnInit {
  private readonly _home = inject(HomeService);
  private readonly _destroyRef = inject(DestroyRef);
  lowStock!: LowStockProduct[];
  ngOnInit(): void {
    this.getLowStock();
  }

  getLowStock(): void {
    this._home
      .getProducts()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this.lowStock = res.statistics.lowStockProducts.sort(
            (a, b) => a.quantity - b.quantity
          );
        },
      });
  }
}
