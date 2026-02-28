import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HomeService } from '../../services/home.service';
import { TopSellingProduct } from '../../interface/iproducts';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-topselling',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './topselling.component.html',
  styleUrl: './topselling.component.scss',
})
export class TopsellingComponent implements OnInit {
  private _homeServices = inject(HomeService);
  private readonly _destroyRef = inject(DestroyRef);
  topSellingProducts!: TopSellingProduct[];
  ngOnInit(): void {
    this.getTopSeelingProducts();
  }

  getTopSeelingProducts(): void {
    this._homeServices
      .getProducts()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this.topSellingProducts = res.statistics.topSellingProducts.sort(
            (a, b) => b.sold - a.sold
          );
        },
      });
  }

  gradientClasses = [
    'bg-linear-to-r from-[#DFAC1640] to-[#DFAC161A]',
    'bg-linear-to-r from-[#757F9540] to-[#757F951A]',
    'bg-linear-to-r from-[#91440040] to-[#9144001A]',
  ];
}
