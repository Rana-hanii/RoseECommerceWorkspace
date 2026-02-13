import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TotalCategoriesComponent } from './components/total-categories/total-categories.component';
import { OrderStatusComponent } from './components/order-status/order-Status.component';
import { HomeserviceService } from './services/homeservice.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    StatisticsComponent,
    TotalCategoriesComponent,
    OrderStatusComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _home = inject(HomeserviceService);

  ngOnInit(): void {
    this.getoverAllStatistics();
  }

  getoverAllStatistics() {
    this._home.getAllStatistic().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
