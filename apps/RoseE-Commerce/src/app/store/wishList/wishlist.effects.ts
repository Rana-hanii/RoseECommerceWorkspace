import { HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WishlistService } from "../../features/wishList/services/wishlist.service";
import * as WishlistActions from"./wishlist.actions"
import { catchError, EMPTY, map, switchMap, tap } from "rxjs";
import { WishlistReq } from "../../features/wishList/interfaces/wishlist-Req/wishlist-req";
import { MessageService } from "primeng/api";

@Injectable()
export class wishlistEffects {

    private readonly actions=inject(Actions)
    private readonly wishlistService=inject(WishlistService)
    private readonly messageService=inject(MessageService)



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
            tap(() => this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Product added to wishlist'
            })),
            map(() => WishlistActions.loadWishlist()),
            catchError((error: HttpErrorResponse) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: error.error?.error || error.error?.message || 'Could not add product to wishlist'
                });
                return EMPTY;
            })
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