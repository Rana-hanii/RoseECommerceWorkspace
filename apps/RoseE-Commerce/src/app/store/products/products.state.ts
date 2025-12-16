import { ProductData } from "../../shared/interfaces/products/products-res";
export type SortType = 'LOW_TO_HIGH' | 'HIGH_TO_LOW' | null;

export interface productsState {
    products:ProductData[];
    isLoading:boolean; 
    sorting: SortType
    categoryID: string|null
    occasionsID: string|null
    error:string|null 
} 

export const initialProductsState:productsState={
    products:[] as ProductData[],
    isLoading: false ,
    error: null ,
    sorting :null, 
    categoryID:null,
    occasionsID:null
}