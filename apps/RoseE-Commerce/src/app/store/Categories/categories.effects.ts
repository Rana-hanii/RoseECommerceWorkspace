
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StoreServicesService } from "../services/store-services.service";
import * as categoriesActions from "./categories.actions"
import { map, switchMap, tap } from 'rxjs';

@Injectable()
export class categotiesEffect {

    private readonly actions=inject(Actions)
    private readonly storeService=inject(StoreServicesService) 

    loadCategories=createEffect(()=> this.actions.pipe(
        ofType(categoriesActions.loadCategories), 
        switchMap(()=> this.storeService.getAllCategories().pipe( 
         map((data) => categoriesActions.setCategories({categories:data.categories}) )))
    ))

}