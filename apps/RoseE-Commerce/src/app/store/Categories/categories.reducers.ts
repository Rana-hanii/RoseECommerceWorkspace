import { createReducer, on } from "@ngrx/store";
import { initialCategoriesState } from "./categories.state";
import * as categoriesAction from "./categories.actions"


export const categoriesReducer=createReducer(initialCategoriesState , 
    on(categoriesAction.loadCategories,
         (state)=>({
         ...state ,
         isloading:true})),



    on(categoriesAction.setCategories , (state , {categories})=>({
        ...state, 
        categories
    })) ,

    on(categoriesAction.loadCategoriesFailure , (state , {error})=> ({
        ...state , 
        isloading:false,
        error
    }))

)