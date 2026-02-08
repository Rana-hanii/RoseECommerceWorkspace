import { createReducer, on } from "@ngrx/store";
import { initialCartState } from "./cart.state";
import * as CartActions from'./cart.actions'

export const cartReducer =createReducer(initialCartState , 

    on(CartActions.loadCart , state => ({...state , isLoading:true}) ) , 

    on(CartActions.updateCart , (state , {userCart ,totalPrice}) =>({
        ...state,
        userCart,
        totalPrice,
        userCartIds:userCart.map(item => item._id),
        isLoading:false
    })) , 

    on(CartActions.removeItemFromCart , (state , {productId}) =>({
        ...state , 
        userCartIds:(state.userCartIds).filter((id)=> id !== productId),
        userCart:(state.userCart).filter((item)=>item._id !== productId)
    })) ,

    on(CartActions.clearCart , state => ({
        ...state , 
        userCart:initialCartState.userCart,
        userCartIds:initialCartState.userCartIds
    }))

)