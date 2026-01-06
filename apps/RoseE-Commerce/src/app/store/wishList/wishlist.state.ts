import { WishlistReq } from "../../features/wishList/interfaces/wishlist-Req/wishlist-req";
import { Product, Wishlist } from "../../features/wishList/interfaces/wishlist-Res/wishlist-res";

export interface wishListState{
    wishlistedProducts:Product[]
    wishlistedProductIds: string[];
    productId:string|null
    data:WishlistReq|null
    isLoading:boolean
    error:string|null
    
}

export const initialWishlistState:wishListState = {
    wishlistedProducts:[],
    wishlistedProductIds:[],
    productId:null,
    data:null,
    isLoading:false,
    error:null
}