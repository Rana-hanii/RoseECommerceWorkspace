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
import { Trend } from '../../interface/weakly';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './Revenue.component.html',
  styleUrl: './Revenue.component.scss',
})
export class RevenueComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);
  monthlyRevenue: MonthlyRevenue[] = [];
  weaklyRevenue: Trend[] = [];
  activeTab: 'monthly' | 'Last Week' = 'monthly';

  private readonly cd = inject(ChangeDetectorRef);
  private readonly _home = inject(HomeService);

  ngOnInit() {
    this.getAllRevenueMonthly();
  }

  getAllRevenueMonthly() {
    this.activeTab = 'monthly';
    this._home.getAllRevenue('monthly').subscribe({
      next: (res) => {
        const allTrends = res.data?.trends || [];
        this.monthlyRevenue = allTrends
          .filter((t: any) => new Date(t.date).getFullYear() === 2025)
          .map((t: any) => ({
            month: new Date(t.date).toLocaleString('default', {
              month: 'short',
              // year: ',
            }),
            totalSales: t.totalSales,
          }));

        this.initChart();
      },
    });
  }
  getAllRevenueWeekly() {
    this.activeTab = 'Last Week';
    this._home.getAllRevenue('weekly').subscribe({
      next: (res) => {
        const allTrends = res.data?.trends || [];
        const lastSevenDays = allTrends.slice(-7);

        this.weaklyRevenue = lastSevenDays.map((w: any) => ({
          date: new Date(w.date).toLocaleDateString('en-EG', {
            weekday: 'long',
            day: '2-digit',
            month: 'short',
          }),
          totalSales: w.totalSales,
          orderCount: w.orderCount || 0,
          averageOrderValue: w.averageOrderValue || 0,
        }));

        this.initChart();
      },
    });
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const currentLabels =
        this.activeTab === 'monthly'
          ? this.monthlyRevenue.map((m) => m.month)
          : this.weaklyRevenue.map((w) => w.date);
      const currentData =
        this.activeTab === 'monthly'
          ? this.monthlyRevenue.map((m) => m.totalSales)
          : this.weaklyRevenue.map((w) => w.totalSales);

      this.data = {
        labels: currentLabels,
        datasets: [
          {
            label:
              this.activeTab === 'monthly'
                ? 'Monthly Revenue'
                : 'Weekly Revenue',
            data: currentData,
            fill: this.activeTab === 'Last Week',
            tension: 0.4,
            borderColor:
              this.activeTab === 'monthly'
                ? documentStyle.getPropertyValue('--p-orange-500')
                : documentStyle.getPropertyValue('--p-gray-500'),
            backgroundColor: 'rgba(107, 114, 128, 0.2)',
          },
        ],
      };
      this.setOptions(documentStyle);
      this.cd.markForCheck();
    }
  }
  private setOptions(documentStyle: any) {
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--p-text-muted-color'
    );
    const surfaceBorder = documentStyle.getPropertyValue(
      '--p-content-border-color'
    );

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: { labels: { color: textColor } },
      },
      scales: {
        x: { ticks: { color: textColorSecondary } },
        y: {
          ticks: {
            color: textColorSecondary,
            callback: (value: any) => {
              if (value >= 1000000) return value / 1000000 + 'M';
              if (value >= 1000) return value / 1000 + 'K';
              return value;
            },
          },
          grid: { color: surfaceBorder },
        },
      },
    };
  }
}
