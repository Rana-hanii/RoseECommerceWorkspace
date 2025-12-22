import { Categories } from "../../shared/interfaces/category-card/category-res";

export interface CategoriesState{
    categories:Categories[]
    isloading:boolean,
    error:string|null
} 


export const initialCategoriesState:CategoriesState={
    categories:[] as Categories[] , 
    isloading:false,
    error:null
}