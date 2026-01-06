import { createAction, props } from "@ngrx/store";
import { Product } from "../../features/wishList/interfaces/wishlist-Res/wishlist-res";
import { WishlistReq } from "../../features/wishList/interfaces/wishlist-Req/wishlist-req";

export const loadWishlist = createAction('[Wishlist] Loading wishlist')

export const setWishlist = createAction('[Wishlist] set wishlist' , props<{wishlistedProducts:Product[]}>())

// add to wishlist 
export const addToWishlist = createAction('[Wishlist] add products to wishlist array' , props<{productId:string}>())

// removing item from wish list 
export const removeFromWishlist = createAction('[Wishlist] remove item from wishlist' , props<{productId:string}>())


// clear All WishList
export const clearWishlist = createAction('[Wishlist] empty wishlist array for user ')

