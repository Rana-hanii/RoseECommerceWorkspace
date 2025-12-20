import { ProductData } from "../../shared/interfaces/products/products-res";
export type SortType = 'LOW_TO_HIGH' | 'HIGH_TO_LOW' | null;


export interface filterProducts{
    categoryID : string[]|null
    occasionID : string[]|null
    lowPrice : number|null
    highPrice : number|null
    minRating : number|null
    search:string
    sorting :SortType
}

export interface productsState {
    products:ProductData[];
    filteredProducts:ProductData[];
    filter:filterProducts
    isLoading:boolean; 
    error:string|null 
} 

export const initialProductsState:productsState={
    products:[] as ProductData[],
    filteredProducts :[] as ProductData[],
    filter:{} as filterProducts,
    isLoading: false ,
    error: null ,
    
}