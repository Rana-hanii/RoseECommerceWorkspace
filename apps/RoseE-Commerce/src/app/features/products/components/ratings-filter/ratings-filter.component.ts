import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetButtonComponent } from "apps/RoseE-Commerce/src/app/shared/components/reset-button/reset-button.component";
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
import { Store } from '@ngrx/store';
import * as productsActions from"../../../../store/products/products.actions"
import * as productsSelectors from"../../../../store/products/products.selectors"

@Component({
  selector: 'app-ratings-filter',
  imports: [CommonModule, ResetButtonComponent ,FormsModule , Rating],
  templateUrl: './ratings-filter.component.html',
  styleUrl: './ratings-filter.component.scss',
})
export class RatingsFilterComponent implements OnInit {

  private readonly store=inject(Store)

  ratingValue = signal<number|null>(null);
  

  ngOnInit(): void {
      this.setRatingFilter()
      this.emptyRateFilter()
  }

  setRatingFilter():void{
    this.store.dispatch(productsActions.filteringProducts({filter:{minRating:this.ratingValue()}}))
  } 

  onRating(value:number):void{
    this.ratingValue.set(value)
    this.setRatingFilter()
  } 


   emptyRateFilter():void{
    this.store.select(productsSelectors.selectRatingValue).subscribe({
      next:res =>{ 
        if (res == null) {
          this.ratingValue.set(null)
        }
        
      }
    })
   }


  reset():void{
    this.ratingValue.set(null)
    this.store.dispatch(productsActions.resetAllFilters());
  }


}
