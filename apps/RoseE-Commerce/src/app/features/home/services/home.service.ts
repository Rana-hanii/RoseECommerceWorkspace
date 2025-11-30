import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { TestimonialsResponse } from '../../../shared/interfaces/testimonials/testimonials-response';
import { BestSellerData } from '../../../shared/interfaces/bestSeller/best-seller';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiService = inject(ApiService);
    private readonly cookieService = inject(CookieService);
  
    isLogged=signal(this.getToken())
  
    getToken():boolean{
      return !!this.cookieService.get('roseToken')
    }
  

  //* Get most popular products
  getMostpopular(){
    return this.apiService.get(API_ENDPOINTS.home.mostPopular);
  }
  //* Get bestSeller products
  getBestSeller():Observable<BestSellerData>{
    return this.apiService.get<BestSellerData>(API_ENDPOINTS.home.bestSeller);
  }

  //* Get Tesimonials
  getTestimonials():Observable<TestimonialsResponse>{
    return this.apiService.get<TestimonialsResponse>(API_ENDPOINTS.home.testimonials)
  } 
}
