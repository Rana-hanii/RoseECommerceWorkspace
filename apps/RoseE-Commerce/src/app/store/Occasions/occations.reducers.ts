import { createReducer, on } from "@ngrx/store";
import { initialOccasionsState } from "./occasions.state";
import * as occaionsActions from "./occasions.actions"

export const occasionsReducer=createReducer(initialOccasionsState , 
    on(occaionsActions.loadOccasions , (state)=> ({
        ...state , 
        isloading:true
    })) ,

    on(occaionsActions.setOccasions , (state , {occasions}) => ({
        ...state , 
        occasions
    }))
)