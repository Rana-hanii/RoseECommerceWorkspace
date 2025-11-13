import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiService = inject(ApiService);

  //* Get most popular products
  getMostpopular(){
    return this.apiService.get(API_ENDPOINTS.home.mostPopular);
  }
  //* Get bestSeller products
  getBestSeller(){
    return this.apiService.get(API_ENDPOINTS.home.bestSeller);
  }
}
