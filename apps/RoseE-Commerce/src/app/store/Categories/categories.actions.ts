import { createAction, props } from "@ngrx/store";
import { Categories} from "../../shared/interfaces/category-card/category-res";

export const loadCategories= createAction('[Categories] loading Categories') 

export const setCategories= createAction('[Categories] set Array of Categories' ,
    props<{categories:Categories[]}>()); 

export const loadCategoriesFailure = createAction('[Categories] load categories failed' , 
    props<{error:string|null}>()
)
