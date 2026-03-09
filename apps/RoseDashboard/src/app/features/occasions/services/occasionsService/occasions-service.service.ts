import { inject, Injectable } from '@angular/core';
import { ApiEndPointsDashboard } from 'apps/RoseDashboard/src/app/core/constants/api-EndPoints';
import { ApiService } from 'apps/RoseDashboard/src/app/core/service/api.service';
import { Observable } from 'rxjs';
import { OccasionsRes } from '../../interfaces/occasionsRes/occasions-res';

@Injectable({
  providedIn: 'root'
})
export class OccasionsServiceService {

  private readonly apiService=inject(ApiService) 


  getAllOcassions():Observable<OccasionsRes>{
    return this.apiService.get<OccasionsRes>(`${ApiEndPointsDashboard.occasions.occasions}`)
  }
}
