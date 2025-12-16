import { Occasions } from "../../shared/interfaces/occasions-card/occasions-res";

export interface occasionsState{
    occasions:Occasions[]
    isloading:boolean
    error:string|null
} 


export const initialOccasionsState:occasionsState ={
    occasions:[] as Occasions[],
    isloading:false,
    error:null
}