import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { ProductsRES } from '../../../shared/interfaces/products/products-res';
import { CategoryRES } from '../../../shared/interfaces/category-card/category-res';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiService=inject(ApiService)


  // (,'') ====> sharing category
  selectedCategory = signal<string>('')

  // (,'') ====> sharing text value 
  searchText =signal<string>('')

  setSearchText(text: string):void {
    this.searchText.set(text);
  }


  // (,'') ====> Get All Products
  getAllProducts():Observable<ProductsRES>{
    return this.apiService.get<ProductsRES>(API_ENDPOINTS.products.products)
  } 


 
 
  
  
}
