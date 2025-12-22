import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';
import { CategoryRES } from '../../shared/interfaces/category-card/category-res';
import { API_ENDPOINTS } from '../../core/constants/api-endPoints';
import { OccasionsRES } from '../../shared/interfaces/occasions-card/occasions-res';

@Injectable({
  providedIn: 'root'
})
export class StoreServicesService {

  private readonly apiService=inject(ApiService)


  // (,'') ====> Get All Categories
    getAllCategories():Observable<CategoryRES>{
      return this.apiService.get<CategoryRES>(API_ENDPOINTS.categories.categories)
    }


    // (,'') ===> Get All Ocassions
    getAllOccasions():Observable<OccasionsRES>{
      return this.apiService.get<OccasionsRES>(API_ENDPOINTS.occasions.occasions)
    }


}
