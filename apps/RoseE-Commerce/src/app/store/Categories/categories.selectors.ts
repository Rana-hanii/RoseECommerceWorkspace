import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoriesState } from "./categories.state";

export const selectCategoriesState=createFeatureSelector<CategoriesState>('categories') 

export const selectAllCategories=createSelector(selectCategoriesState , (state)=> state.categories);
export const selectLoadingStatus=createSelector(selectCategoriesState , (state)=> state.isloading) ;
export const selectErrorMsg=createSelector(selectCategoriesState , (state)=> state.error)