import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productsState } from "./products.state";
import * as productsUti from './productsBadges.utils';

export const selectProductsState = createFeatureSelector<productsState>('products')

export const selectAllProducts = createSelector(selectProductsState , (state)=>state.products)

export const selectLoadingStatus = createSelector(selectProductsState , (state)=>state.isLoading)

export const selectErrorMsg = createSelector(selectProductsState , (state)=>state.error) 

export const selectProductsWithBadges = createSelector(   selectAllProducts, (products) =>
      products.map(p => ({
      ...p,
      badges: productsUti.getBadge(p), 
    }))) 

export const selectSortingType = createSelector(selectProductsState, (state)=> state.sorting)    

export const selectCategory= createSelector(selectProductsState , (state)=>state.categoryID) 

export const selectOccasion= createSelector(selectProductsState , (state)=>state.occasionsID) 


// (,'') ===> this selector is for showing products on filter
export const sortByFilter = createSelector(selectAllProducts , selectCategory ,selectSortingType , selectOccasion ,
  (products , categoryID , sortType , occasionsID) => { 

    if (categoryID) {
      return [...products].filter( p=> p.category === categoryID )
    } 
    
    if (occasionsID) {
      return [...products].filter( p=> p.occasion === occasionsID)
    }
    
    if(sortType === 'LOW_TO_HIGH'){
      return [...products].sort((a,b) => a.priceAfterDiscount - b.priceAfterDiscount)
    } 


    return [...products]
    } 




  
)
