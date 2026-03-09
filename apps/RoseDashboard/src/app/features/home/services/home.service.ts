import { inject, Injectable } from '@angular/core';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/service/api.service';
import { OverAllStatistics } from '../interface/over-all-statistics';
import { categoryStatistics } from '../interface/category-statistics';
import { OrderStatus } from '../interface/order-status';
import { AllRevenue } from '../interface/all-revenue';
import { Weakly } from '../interface/weakly';
import { Iproducts } from '../interface/iproducts';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly _apiServices = inject(ApiService);

  getOverAllStatistics(): Observable<OverAllStatistics> {
    return this._apiServices.get<OverAllStatistics>(
      ApiEndPointsDashboard.overview.overAllStatistics
    );
  }

  getCategoryStatistics(): Observable<categoryStatistics> {
    return this._apiServices.get<categoryStatistics>(
      ApiEndPointsDashboard.overview.categoryStatistics
    );
  }

  getOrderStatus(): Observable<OrderStatus> {
    return this._apiServices.get<OrderStatus>(
      ApiEndPointsDashboard.overview.orderStatistics
    );
  }

  getAllRevenue(
    interval: 'monthly' | 'weekly',
    startDate = '2023-01-01',
    endDate = '2026-12-31'
  ): Observable<AllRevenue> {
    return this._apiServices.get<AllRevenue>(
      `${ApiEndPointsDashboard.overview.salesTrends}/?startDate=${startDate}&endDate=${endDate}&interval=${interval}`
    );
  }

  getProducts(): Observable<Iproducts> {
    return this._apiServices.get<Iproducts>(
      ApiEndPointsDashboard.overview.productsStatistics
    );
  }
}
