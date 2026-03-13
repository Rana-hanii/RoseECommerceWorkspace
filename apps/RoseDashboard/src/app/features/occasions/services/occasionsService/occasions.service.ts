import { inject, Injectable } from '@angular/core';
import { ApiEndPointsDashboard } from 'apps/RoseDashboard/src/app/core/constants/api-EndPoints';
import { ApiService } from 'apps/RoseDashboard/src/app/core/service/api.service';
import { Observable } from 'rxjs';
import { OccasionsRes } from '../../interfaces/occasionsRes/occasions-res';
import { AddOccasion } from '../../interfaces/add-occasion';

@Injectable({
  providedIn: 'root',
})
export class OccasionsService {
  private readonly apiService = inject(ApiService);

  getAllOccasion(): Observable<OccasionsRes> {
    return this.apiService.get<OccasionsRes>(
      `${ApiEndPointsDashboard.occasions.occasions}`
    );
  }

  addOccasion(data: any): Observable<AddOccasion> {
    return this.apiService.post<AddOccasion>(
      ApiEndPointsDashboard.occasions.add,
      data
    );
  }

  updateOccasion(id: string, data: any): Observable<any> {
    return this.apiService.put(
      ApiEndPointsDashboard.occasions.update(id),
      data
    );
  }
  deleteOccasion(id: string): Observable<any> {
    return this.apiService.delete(ApiEndPointsDashboard.occasions.delete(id));
  }
}
