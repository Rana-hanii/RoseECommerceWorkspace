import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-statistics',
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnInit {
  private readonly _home = inject(HomeService);
  totalProduct!: number;
  totalOrders!: number;
  totalCategories!: number;
  totalRevenue!: number;
  ngOnInit(): void {
    this.getoverAllStatistics();
  }

  getoverAllStatistics() {
    this._home.getOverAllStatistics().subscribe({
      next: (res) => {
        this.totalProduct = res.statistics.totalProducts;
        this.totalOrders = res.statistics.totalOrders;
        this.totalCategories = res.statistics.totalCategories;
        this.totalRevenue = res.statistics.totalRevenue;
      },
    });
  }
}
