import { createReducer, on } from "@ngrx/store";
import { initialWishlistState } from "./wishlist.state";
import * as WishlistActions from"./wishlist.actions"
import { Product } from "../../features/wishList/interfaces/wishlist-Res/wishlist-res";

export const wishlistReducer = createReducer( initialWishlistState , 

    on(WishlistActions.loadWishlist , state => ({...state , isLoading:true})) ,

    on(WishlistActions.setWishlist , (state , {wishlistedProducts})=>({
        ...state , 
        wishlistedProducts,
        wishlistedProductIds:wishlistedProducts.map(i=>i._id)
    })),

    on(WishlistActions.addToWishlist , (state , {productId})=>({
        ...state,
     wishlistedProductIds: state.wishlistedProductIds.includes(productId)
      ? state.wishlistedProductIds
      : [...state.wishlistedProductIds, productId]
    })),

    on(WishlistActions.removeFromWishlist , (state , {productId})=>({
        ...state , 
        wishlistedProductIds:(state.wishlistedProductIds).filter(id => id !== productId)
    })) ,
       on(WishlistActions.clearWishlist , (state)=>({
        ...state , 
        wishlistedProducts:initialWishlistState.wishlistedProducts,
        wishlistedProductIds:initialWishlistState.wishlistedProductIds
    })),



)