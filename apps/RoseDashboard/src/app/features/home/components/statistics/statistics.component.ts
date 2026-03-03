import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-statistics',
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnInit {
  private readonly _home = inject(HomeService);
  private readonly _destroyRef = inject(DestroyRef);
  totalProduct!: number;
  totalOrders!: number;
  totalCategories!: number;
  totalRevenue!: number;
  ngOnInit(): void {
    this.getoverAllStatistics();
  }

  getoverAllStatistics() {
    this._home
      .getOverAllStatistics()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this.totalProduct = res.statistics.totalProducts;
          this.totalOrders = res.statistics.totalOrders;
          this.totalCategories = res.statistics.totalCategories;
          this.totalRevenue = res.statistics.totalRevenue;
        },
      });
  }
}
