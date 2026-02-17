import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HomeService } from '../../services/home.service';
import { Statistic } from 'apps/RoseDashboard/src/app/features/home/interface/category-statistics';
@Component({
  selector: 'app-total-categories',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './total-categories.component.html',
  styleUrl: './total-categories.component.scss',
})
export class TotalCategoriesComponent implements OnInit {
  private readonly _homeService = inject(HomeService);
  statistics!: Statistic[];
  getCategoryStatistics(): void {
    this._homeService.getCategoryStatistics().subscribe({
      next: (res) => {
        this.statistics = res.statistics;
      },
    });
  }

  ngOnInit(): void {
    this.getCategoryStatistics();
  }
}
