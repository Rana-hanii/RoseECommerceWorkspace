import { createReducer, on } from "@ngrx/store";
import { initialProductsState, SortType } from "./products.state";
import * as productsActions from './products.actions'

export const productsReducer=createReducer(initialProductsState,
    on(productsActions.loadProducts,(state)=>({ ...state , isLoading:true})),

    on(productsActions.setProducts,(state , {products}) => ({
        ...state,
        products
    })) ,

    on(productsActions.loadproductsFailure,(state , {error}) => ({
        ...state,
        isLoading:false , 
        error
    })), 
    on(productsActions.sortingProducts , (state)=> ({
        ...state , 
        sorting:'LOW_TO_HIGH' as SortType
    })) , 


    on(productsActions.categorizedProducts , (state ,{categoryID})=>({
        ...state , 
        categoryID
    })) , 

    on(productsActions.occaionsProducts , (state ,{occasionsID})=>({
        ...state , 
        occasionsID
    }))
)