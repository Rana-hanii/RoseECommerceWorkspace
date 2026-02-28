import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { HomeService } from '../../services/home.service';
import { MonthlyRevenue } from '../../interface/all-revenue';
import { Data, Trend, Weakly } from '../../interface/weakly';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-revenue',
  imports: [CommonModule, ChartModule],
  templateUrl: './Revenue.component.html',
  styleUrl: './Revenue.component.scss',
})
export class RevenueComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);
  monthlyRevenue!: MonthlyRevenue[];
  weaklyRevenue!: Trend[];
  private readonly cd = inject(ChangeDetectorRef);
  private readonly _home = inject(HomeService);
  private readonly _destroyRef = inject(DestroyRef);
  getAllRevenueMonthly() {
    this._home
      .getAllRevenueMonthly()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this.monthlyRevenue = res.data.trends.map((t: any) => ({
            month: new Date(t.date).toLocaleString('default', {
              month: 'short',
              year: 'numeric',
            }),
            totalSales: t.totalSales,
          }));
          this.initChart();
        },
      });
  }

  getAllRevenueWeakly() {
    this._home
      .getAllRevenueWeakly()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this.weaklyRevenue = res.data.trends.map((w: any) => ({
            // Weakly: `Week of ${new Date(w.date).toLocaleString()}`,
            date: w.date,
            totalSales: w.totalSales,
            orderCount: w.orderCount,
            averageOrderValue: w.averageOrderValue,
          }));
          console.log(this.weaklyRevenue);
          this.initChart();
        },
      });
  }

  ngOnInit() {
    this.getAllRevenueMonthly();
    this.getAllRevenueWeakly();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        '--p-content-border-color'
      );
      const chartMonthlyData = this.monthlyRevenue.map((d) => d.month);
      const totalSalesMonthly = this.monthlyRevenue.map((t) => t.totalSales);
      const chartLabels = this.weaklyRevenue.map(
        (t) => `Week of ${new Date(t.date).toLocaleDateString()}`
      );
      const TotalDataWeakly = this.weaklyRevenue.map((w) => w.totalSales);
      // const monthlyAndWealy = [...chartMonthlyData, ...chartLabels];
      this.data = {
        labels: chartMonthlyData,
        datasets: [
          {
            label: 'Monthly',
            data: totalSalesMonthly,
            fill: false,
            tension: 0.4,
            borderColor: documentStyle.getPropertyValue('--p-orange-500'),
          },
          {
            label: 'Last Week',
            data: TotalDataWeakly,
            fill: true,
            borderColor: documentStyle.getPropertyValue('--p-gray-500'),
            tension: 0.4,
            backgroundColor: 'rgba(107, 114, 128, 0.2)',
          },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
