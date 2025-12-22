import { createAction, props } from "@ngrx/store";
import { Occasions } from "../../shared/interfaces/occasions-card/occasions-res";

export const loadOccasions=createAction('[Occasions] load all Occasions data')

export const setOccasions=createAction('[Occaasions] set data to array ' , props<{occasions:Occasions[]}>());