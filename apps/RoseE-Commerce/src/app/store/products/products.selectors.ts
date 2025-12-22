import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productsState } from "./products.state";


export const selectProductsState = createFeatureSelector<productsState>('products')

export const selectAllProducts = createSelector(selectProductsState , (state)=>state.products)

export const selectLoadingStatus = createSelector(selectProductsState , (state)=>state.isLoading)

export const selectErrorMsg = createSelector(selectProductsState , (state)=>state.error) 

export const selectFilteredProducts = createSelector (selectProductsState , (state =>state.filteredProducts))

// (,'') ===> these selectors for restarting all filters
export const selectCategoriesIDs = createSelector(selectProductsState , state => state.filter.categoryID) 
export const selectOccasionsIDs = createSelector(selectProductsState , state => state.filter.occasionID) 

export const selectPricesValues = createSelector(selectProductsState , 
    state => ({
    lowPrice: state.filter.lowPrice,
    highPrice: state.filter.highPrice
  }))  


export const selectRatingValue=createSelector(selectProductsState , state => state.filter.minRating)
export const selectSortType=createSelector(selectProductsState , state => state.filter.sorting)