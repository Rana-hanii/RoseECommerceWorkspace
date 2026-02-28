import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HomeService } from '../../services/home.service';
import { Statistic } from 'apps/RoseDashboard/src/app/features/home/interface/category-statistics';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-total-categories',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './total-categories.component.html',
  styleUrl: './total-categories.component.scss',
})
export class TotalCategoriesComponent implements OnInit {
  private readonly _homeService = inject(HomeService);
  private readonly _destroyRef = inject(DestroyRef);
  statistics!: Statistic[];
  getCategoryStatistics(): void {
    this._homeService
      .getCategoryStatistics()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this.statistics = res.statistics;
        },
      });
  }

  ngOnInit(): void {
    this.getCategoryStatistics();
  }
}
