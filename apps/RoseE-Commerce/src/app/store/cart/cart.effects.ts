import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CartService } from "../../features/cart/services/cart.service";
import * as CartActions from '../../store/cart/cart.actions' 
import { map, switchMap } from "rxjs";
import { AddProductReq } from '../../features/cart/interfaces/add-product-Req/add-product-req';

@Injectable()
export class cartEffects {
    private readonly actions=inject(Actions)
    private readonly cartService=inject(CartService)



    loadCart=createEffect(()=>this.actions.pipe(
        ofType(CartActions.loadCart),
        switchMap(()=>this.cartService.getLoggedUserCart().pipe(
            map((data)=>CartActions.updateCart({userCart:data.cart.cartItems , totalPrice:data.cart.totalPrice}))
        ))
    )) 


    addToCart=createEffect(()=>this.actions.pipe(
        ofType(CartActions.addItemToCart),
        switchMap(({productId}) => {
            const payload:AddProductReq = {product:productId , quantity:1}
            return this.cartService.addProductToCart(payload).pipe(
                map(()=>CartActions.loadCart())
            )
        })
    )) 

    updateItemQuantity=createEffect(()=>this.actions.pipe(
        ofType(CartActions.updateItemQuantity),
        switchMap(({ quantity , productId })=>this.cartService.updateProductQuantity({quantity} , productId).pipe(
            map(()=>CartActions.loadCart())
        ))
    ))

    removeFromCart=createEffect(()=>this.actions.pipe(
        ofType(CartActions.removeItemFromCart),
        switchMap(({productId})=>this.cartService.removeProductFromCart(productId).pipe(
            map(()=>CartActions.loadCart())
        ))
    ))


    clearCart=createEffect(()=>this.actions.pipe(
        ofType(CartActions.clearCart),
        switchMap(()=>this.cartService.clearCart().pipe(
            map(()=>CartActions.loadCart())
        ))
    ))

}