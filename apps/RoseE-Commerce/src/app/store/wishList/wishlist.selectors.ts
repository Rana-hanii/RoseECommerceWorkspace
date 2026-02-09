import { map } from 'rxjs';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { wishListState } from "./wishlist.state";

export const selectWishlistState= createFeatureSelector<wishListState>('wishlist')

export const selectWishlistArray = createSelector(selectWishlistState , (state)=> state.wishlistedProducts)

export const selectWishlistIds = createSelector(selectWishlistState, (state) => state.wishlistedProductIds)
