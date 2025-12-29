import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { ProductData, ProductsRES } from '../../../shared/interfaces/products/products-res';
import { specificProduct } from '../../../shared/interfaces/products/productDetails.res';


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


  // (,'') ====> Get Specific Product by ID
  getSpecificProduct(id:string|null):Observable<specificProduct>{
    return this.apiService.get<specificProduct>(`${API_ENDPOINTS.products.products}/${id}`)
  }



  // (,'') ====> Get product reviews 
  

 
 
  
  
}
