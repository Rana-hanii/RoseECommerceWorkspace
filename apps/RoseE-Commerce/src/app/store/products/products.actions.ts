import { createAction, props } from "@ngrx/store";
import { ProductData } from "../../shared/interfaces/products/products-res";
import { SortType } from "./products.state";

export const loadProducts = createAction('[Products] Loading Products');


export const setProducts = createAction('[Products] set Array of Products' , props<{products:ProductData[]}>());

export const loadproductsFailure = createAction( '[Products] loading Products failed' , props<{error :string |null}>())

export const sortingProducts = createAction('[Products] Sorting from low to high' ,props<{sorting : SortType}>()) 

export const categorizedProducts = createAction( '[Products] sort products as category' , props<{categoryID : string |null}>()) 

export const occaionsProducts = createAction( '[Products] sort products with occsion ' , props<{occasionsID : string |null}>()) 
