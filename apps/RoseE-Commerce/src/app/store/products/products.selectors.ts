import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productsState } from "./products.state";
import * as productsUti from './productsBadges.utils';

export const selectProductsState = createFeatureSelector<productsState>('products')

export const selectAllProducts = createSelector(selectProductsState , (state)=>state.products)

export const selectLoadingStatus = createSelector(selectProductsState , (state)=>state.isLoading)

export const selectErrorMsg = createSelector(selectProductsState , (state)=>state.error) 

export const selectFilteredProducts = createSelector (selectProductsState , (state =>state.filteredProducts))