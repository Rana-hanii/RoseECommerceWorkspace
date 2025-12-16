import { createFeatureSelector, createSelector } from "@ngrx/store";
import { occasionsState } from "./occasions.state";

export const selectOccasionsState = createFeatureSelector<occasionsState>('occasions') 

export const selectAllOccasions = createSelector(selectOccasionsState , (state)=> state.occasions)
export const selectloadingstatus = createSelector(selectOccasionsState , (state)=> state.isloading)