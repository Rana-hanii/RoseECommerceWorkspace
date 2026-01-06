import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WishlistService } from "../../features/wishList/services/wishlist.service";
import * as WishlistActions from"./wishlist.actions"
import { map, switchMap } from "rxjs";
import { WishlistReq } from "../../features/wishList/interfaces/wishlist-Req/wishlist-req";

@Injectable()
export class wishlistEffects {

    private readonly actions=inject(Actions)
    private readonly wishlistService=inject(WishlistService)



    loadWishlist=createEffect(()=>this.actions.pipe(
        ofType(WishlistActions.loadWishlist),
        switchMap(()=>this.wishlistService.getWishlist().pipe(
            map((data)=> WishlistActions.setWishlist({wishlistedProducts:data.wishlist.products}))
        ))
    ))  


    addToWishlist = createEffect(() =>this.actions.pipe(
        ofType(WishlistActions.addToWishlist),
        switchMap(({ productId }) => {
        const payload: WishlistReq = { productId };
        return this.wishlistService.addToWishlist(payload).pipe(
            map(() => WishlistActions.loadWishlist()),
        );
        })
    )
    );



    removeFromWishlist=createEffect(()=> this.actions.pipe(
        ofType(WishlistActions.removeFromWishlist),
        switchMap(({productId})=> this.wishlistService.removeFromWishlist(productId).pipe(
            map(()=>WishlistActions.loadWishlist())
        ))
    ))

    clearWishlist = createEffect(()=>this.actions.pipe(
        ofType(WishlistActions.clearWishlist),
        switchMap(()=>this.wishlistService.clearAllwishlist().pipe(
            map(()=>WishlistActions.loadWishlist())
        ))
    ))
}