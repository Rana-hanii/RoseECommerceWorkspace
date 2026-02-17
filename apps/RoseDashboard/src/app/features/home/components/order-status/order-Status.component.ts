import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { OrdersByStatus } from 'apps/RoseDashboard/src/app/features/home/interface/order-status';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './order-Status.component.html',
  styleUrl: './order-Status.component.scss',
})
export class OrderStatusComponent implements OnInit {
  ordersByStatus: OrdersByStatus[] = [];
  totalOrder = 0;
  data: any;
  options: any;

  platformId = inject(PLATFORM_ID);
  private readonly _home = inject(HomeService);
  private readonly cd = inject(ChangeDetectorRef);

  ngOnInit() {
    this.getOrderStatus();
  }

  getOrderStatus(): void {
    this._home.getOrderStatus().subscribe({
      next: (res) => {
        this.ordersByStatus = res.statistics.ordersByStatus.filter(
          (item: OrdersByStatus) => item._id !== null
        );
        this.totalOrder = this.ordersByStatus.reduce(
          (acc, curr) => acc + curr.count,
          0
        );

        this.initChart();
      },
    });
  }

  getPercentage(count: number) {
    if (this.totalOrder === 0) return '0%';
    const percent = (count / this.totalOrder) * 100;
    return Math.round(percent) + '%';
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const labels = this.ordersByStatus.map((l) => l._id);
      const counts = this.ordersByStatus.map((c) => c.count);
      const bgColors = labels.map((id) => {
        switch (id) {
          case 'completed':
            return documentStyle.getPropertyValue('--p-gray-500').trim();
          case 'inProgress':
            return documentStyle.getPropertyValue('--p-cyan-500').trim();
          case 'pending':
            return documentStyle.getPropertyValue('--p-yellow-500').trim();
          case 'canceled':
            return documentStyle.getPropertyValue('--p-orange-500').trim();
          default:
            return documentStyle.getPropertyValue('--p-text-color').trim();
        }
      });

      this.data = {
        labels: labels,
        datasets: [
          {
            data: counts,
            backgroundColor: bgColors,
            hoverBackgroundColor: bgColors,
            borderWidth: 0,
          },
        ],
      };

      this.options = {
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
      };

      this.cd.markForCheck();
    }
  }
}
