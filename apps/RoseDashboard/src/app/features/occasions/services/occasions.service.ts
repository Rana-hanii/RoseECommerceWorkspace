import { inject, Injectable } from '@angular/core';
import { ApiEndPointsDashboard } from 'apps/RoseDashboard/src/app/core/constants/api-EndPoints';
import { ApiService } from 'apps/RoseDashboard/src/app/core/service/api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { OccasionsRes } from '../interfaces/occasions-res';
import { AddOccasion } from '../interfaces/add-occasion';
import { UpdateOccasion } from '../interfaces/update-occasion';
import { DeleteOccasion } from '../interfaces/delete-occasion';
import { GetOccasion } from '../interfaces/get-occasion';

@Injectable({
  providedIn: 'root',
})
export class OccasionsService {
  private readonly apiService = inject(ApiService);

  getAllOccasion(): Observable<OccasionsRes> {
    const params = new HttpParams().set('limit', '100');
    return this.apiService.get<OccasionsRes>(
      ApiEndPointsDashboard.occasions.occasions,
      { params }
    );
  }

  addOccasion(data: any): Observable<AddOccasion> {
    return this.apiService.post<AddOccasion>(
      ApiEndPointsDashboard.occasions.add,
      data
    );
  }

  updateOccasion(id: string, data: any): Observable<UpdateOccasion> {
    return this.apiService.put<UpdateOccasion>(
      ApiEndPointsDashboard.occasions.update(id),
      data
    );
  }
  deleteOccasion(id: string): Observable<DeleteOccasion> {
    return this.apiService.delete<DeleteOccasion>(
      ApiEndPointsDashboard.occasions.delete(id)
    );
  }

  getOccasionId(id: string): Observable<GetOccasion> {
    return this.apiService.get<GetOccasion>(
      ApiEndPointsDashboard.occasions.get(id)
    );
  }
}
