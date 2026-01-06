import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { ProductsRES } from '../../../shared/interfaces/products/products-res';
import { specificProduct } from '../../../shared/interfaces/products/productDetails.res';
import { ProductReview } from '../interfaces/product-review/product-review';
import { ProductReviewReq } from '../interfaces/product-reviewReq/product-review-req';
import { ProductReviewRes } from '../interfaces/product-reviewRes/product-review-res';
import { RelatedProductRes } from '../interfaces/related-roductRes/related-product-res';


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
    getProductReviews(id:string):Observable<ProductReview>{
      return this.apiService.get<ProductReview>(`${API_ENDPOINTS.products.products}/${id}${API_ENDPOINTS.reviews.reviews}`)
    }

  // (,'') ====> post product review 
    postReview(data:ProductReviewReq):Observable<ProductReviewRes>{
      return this.apiService.post<ProductReviewRes>(`${API_ENDPOINTS.reviews.reviews}` , data)
    }


    // (,'') ====> Get Related Products 
    getRelatedProducts(id:string):Observable<RelatedProductRes>{
      return this.apiService.get<RelatedProductRes>(`${API_ENDPOINTS.relatedCategories.relatedCategories}/${id}`)
    }
   

    

 
 
  
  
}
