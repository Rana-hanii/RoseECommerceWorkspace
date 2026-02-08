import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cartState } from "./cart.state";

export const selectCartState = createFeatureSelector<cartState>('cart')

export const selectUserCart = createSelector(selectCartState , state => state.userCart )
export const selectUserTotalPrice = createSelector(selectCartState , state => state.totalPrice )
export const selectUserCartIds = createSelector(selectCartState , state => state.userCartIds )
export const selectUserCartCount = createSelector(selectUserCartIds , ids => ids.length )