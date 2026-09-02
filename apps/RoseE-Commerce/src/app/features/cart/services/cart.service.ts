import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCart } from '../interfaces/userCart/user-cart';
import { ApiService } from '../../../core/services/api.service';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { AddProductReq } from '../interfaces/add-product-Req/add-product-req';
import { AddProductRes } from '../interfaces/add-product-Res/add-product-res';
import { RemoveProductRes } from '../interfaces/remove-product-Res/remove-product-res';
import { ClearCart } from '../interfaces/clearCart/clear-cart';
import { UpdateQuantityReq } from '../interfaces/update-quantity/update-quantity-Req';
import { UpdateQuantityRes } from '../interfaces/update-quantity/update-quantity-Res';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly apiService=inject(ApiService)

  // (,'') get user cart 
  getLoggedUserCart():Observable<UserCart>{
    return this.apiService.get<UserCart>(`${API_ENDPOINTS.cart.cart}`)
  }


  // (,'') add product to cart
  addProductToCart(data:AddProductReq):Observable<AddProductRes>{
    return this.apiService.post<AddProductRes>(`${API_ENDPOINTS.cart.cart}` , data )
  }

  // (,'') update Product Quantity
  updateProductQuantity(data:UpdateQuantityReq , id:string):Observable<UpdateQuantityRes>{
    return this.apiService.put<UpdateQuantityRes>(`${API_ENDPOINTS.cart.cart}/${id}` , data)
  }


  // (,'') remove product from cart
  removeProductFromCart(data:string|null):Observable<RemoveProductRes>{
    return this.apiService.delete<RemoveProductRes>(`${API_ENDPOINTS.cart.cart}/${data}`)
  }


  // (,'') Clear cart
  clearCart():Observable<ClearCart>{
    return this.apiService.delete<ClearCart>(`${API_ENDPOINTS.cart.cart}`)
  }

 

}
