import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StoreServicesService } from "../services/store-services.service";
import * as occasionsActions from "./occasions.actions"
import { map, switchMap } from "rxjs";

@Injectable()
export class occasionsEffect {

    private readonly actions=inject(Actions)
    private readonly storeService=inject(StoreServicesService)


    loadOccaions = createEffect (()=> this.actions.pipe(
        ofType(occasionsActions.loadOccasions),
        switchMap(()=> this.storeService.getAllOccasions().pipe(
            map((data) => occasionsActions.setOccasions({occasions:data.occasions}))
        ))
    ))
}