import { loadProducts } from './products.actions';
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../../features/products/services/products.service";
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ProductsRES } from '../../shared/interfaces/products/products-res';
import * as productsActions from '../../store/products/products.actions';
import * as productsUti from './productsBadges.utils';

@Injectable()
export class productsEffects {
    private readonly actions=inject(Actions) 
    private readonly productService=inject(ProductsService)


    loadProducts=createEffect(()=> this.actions.pipe(
        ofType(productsActions.loadProducts),
        switchMap(() => this.productService.getAllProducts().pipe(map((res:ProductsRES) => res.products.map(
            product => ({ ...product , badges:productsUti.getBadge(product)})
        )), map(products => productsActions.setProducts({ products })) ,
            catchError(error => of(productsActions.loadproductsFailure({error:error.message})))
    
    ))
    ))  


    loadProductById = createEffect(() =>
        this.actions.pipe(
            ofType(productsActions.loadProductbyId),
             switchMap(({ id }) =>
          this.productService.getSpecificProduct(id).pipe(
              map(res => productsActions.getProductById({ product:res.product }))
        )
        )));
    }