import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { ProductsRES } from '../../../shared/interfaces/products/products-res';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiService=inject(ApiService)

  // (,'') ====> Get All Products
  getAllProducts():Observable<ProductsRES>{
    return this.apiService.get<ProductsRES>(API_ENDPOINTS.products.products)
  }

  
  
}
