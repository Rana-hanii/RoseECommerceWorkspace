import { inject, Injectable } from '@angular/core';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/service/api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeserviceService {
  private readonly _apiServices = inject(ApiService);

  getAllStatistic(): Observable<any> {
    return this._apiServices.get(
      ApiEndPointsDashboard.overview.overAllStatistics
    );
  }
}
