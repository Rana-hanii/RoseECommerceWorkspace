import { CartItem } from "../../features/cart/interfaces/add-product-Res/add-product-res";

export interface cartState{
    userCart:CartItem[]
    userCartIds:string[]
    productId:string|null
    totalPrice:number|null
    quantity:number|null
    isLoading:boolean
    error:string|null 
    
} 


export const initialCartState:cartState = {
    userCart:[],
    userCartIds:[],
    totalPrice:null,
    productId:null,
    quantity:null,
    isLoading:false,
    error:null
}