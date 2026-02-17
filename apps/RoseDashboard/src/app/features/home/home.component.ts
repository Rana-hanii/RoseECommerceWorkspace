import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TotalCategoriesComponent } from './components/total-categories/total-categories.component';
import { OrderStatusComponent } from './components/order-status/order-Status.component';
import { RevenueComponent } from './components/Revenue/Revenue.component';
import { TopsellingComponent } from './components/topselling/topselling.component';
import { LowStockComponent } from './components/lowStock/lowStock.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    StatisticsComponent,
    TotalCategoriesComponent,
    OrderStatusComponent,
    RevenueComponent,
    TopsellingComponent,
    LowStockComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
