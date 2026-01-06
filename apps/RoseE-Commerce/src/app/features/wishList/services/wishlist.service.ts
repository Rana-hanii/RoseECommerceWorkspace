import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { WishlistReq } from '../interfaces/wishlist-Req/wishlist-req';
import { WishlistRes } from '../interfaces/wishlist-Res/wishlist-res';
import { RemoveFromWishlist } from '../interfaces/remove-from-wishlist/remove-from-wishlist';
import { ClearWishlist } from '../interfaces/clear-wishlist/clear-wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  

  private readonly apiService=inject(ApiService)

  
  // (,'') ====. Add product to wishList
  addToWishlist(data:WishlistReq):Observable<string>{
    return this.apiService.post<string>(`${API_ENDPOINTS.wishlist.wishlist}` , data )
  }

  // (,'') ====>  Get all wishList 
  getWishlist():Observable<WishlistRes>{
    return this.apiService.get<WishlistRes>(`${API_ENDPOINTS.wishlist.wishlist}`)
  }

   // (,'') ====>  remove item from wishList 
  removeFromWishlist(id:string|null):Observable<RemoveFromWishlist>{
    return this.apiService.delete<RemoveFromWishlist>(`${API_ENDPOINTS.wishlist.wishlist}/${id}`)
  }

  // (,'') ====>  clear all wishList
  clearAllwishlist():Observable<ClearWishlist>{
    return this.apiService.postEmpty<ClearWishlist>(`${API_ENDPOINTS.wishlist.clearWishlist}`)
  }
  
}
