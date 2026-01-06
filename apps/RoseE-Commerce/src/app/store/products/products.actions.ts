import { createAction, props } from "@ngrx/store";
import { ProductData } from "../../shared/interfaces/products/products-res";
import { filterProducts, SortType } from "./products.state";
import { Product, specificProduct } from "../../shared/interfaces/products/productDetails.res";

export const loadProducts = createAction('[Products] Loading Products');


export const setProducts = createAction('[Products] set Array of Products' , props<{products:ProductData[]}>());

export const loadproductsFailure = createAction( '[Products] loading Products failed' , props<{error :string |null}>())

export const sortingProducts = createAction('[Products] Sorting from low to high' ,props<{sorting : SortType}>()) 

export const filteringProducts = createAction('[Products] apply filters' ,props<{filter: Partial<filterProducts>}>()) 
export const resetAllFilters = createAction('[Products] reset filters') 


export const loadProductbyId = createAction('[Products] load product by ID ' , props<{ id: string|null }>())

export const getProductById = createAction('[Products] get product by id ', props<{product:Product}>())

