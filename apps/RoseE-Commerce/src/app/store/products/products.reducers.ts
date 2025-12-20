import { createReducer, on } from "@ngrx/store";
import { initialProductsState } from "./products.state";
import * as productsActions from './products.actions'
import { applyAllFilters } from "./products.filter";

export const productsReducer=createReducer(initialProductsState,
    on(productsActions.loadProducts,(state)=>({ ...state , isLoading:true})),

    on(productsActions.setProducts,(state , {products}) => ({
        ...state,
        products,
        filteredProducts:applyAllFilters(products , state.filter),
        isLoading:false
    })) ,

    on(productsActions.loadproductsFailure,(state , {error}) => ({
        ...state,
        isLoading:false , 
        error
    })), 

    on(productsActions.filteringProducts , (state , {filter})=>{
       const updatedFilters = {
        ...state.filter , 
        ...filter
       }

       return{
        ...state,
        filter:updatedFilters,
        filteredProducts:applyAllFilters(state.products , updatedFilters)

       }
    }) ,

    on(productsActions.resetAllFilters , (state)=>({
        ...state ,
        filter :{
            categoryID: [],
            occasionID: [],
            lowPrice: null,
            highPrice: null,
            minRating: null,
            search: '',
            sorting: null
        } ,
        filteredProducts:[...state.products]
    }))
)