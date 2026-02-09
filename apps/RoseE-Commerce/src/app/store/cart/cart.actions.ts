import { CartItem } from '../../features/cart/interfaces/add-product-Res/add-product-res';
import { createAction, props } from "@ngrx/store";

export const loadCart = createAction('[Cart] load user Cart')

export const updateCart = createAction('[Cart] update user cart' , props<{userCart:CartItem[] , totalPrice:number}>())

export const addItemToCart=createAction('[Cart] add product to cart' , props<{productId:string}>())

export const updateItemQuantity = createAction('[Cart] update product Quantity in cart' , props<{productId:string , quantity:number }>())

export const removeItemFromCart = createAction('[Cart] remove product from cart' , props<{productId:string}>())

export const clearCart = createAction('[Cart] clear all items from user cart ')