import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetButtonComponent } from "apps/RoseE-Commerce/src/app/shared/components/reset-button/reset-button.component";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { Store } from '@ngrx/store';
import * as productsActions from"../../../../store/products/products.actions"
import * as productsSelectors from"../../../../store/products/products.selectors"

@Component({
  selector: 'app-price-filter',
  imports: [CommonModule, ResetButtonComponent ,FormsModule, InputTextModule, FloatLabel],
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.scss',
})
export class PriceFilterComponent implements OnInit {

  private readonly store=inject(Store)

   lowPrice = signal<number | null>(null)
   highPrice = signal<number | null>(null)



   ngOnInit(): void {
       this.emptyPriceInputs()
   }



    setFilter():void{
      this.store.dispatch(productsActions.filteringProducts({filter : {lowPrice:this.lowPrice(), highPrice:this.highPrice()}}))
    } 


    onLowPrice(event:Event):void{
      const input= event.target as HTMLInputElement
      const value = input.value
      this.lowPrice.set(value? +value:null)
      this.setFilter()
    } 

    onLHighPrice(event:Event):void{
      const input= event.target as HTMLInputElement
      const value = input.value
      this.highPrice.set(value? +value:null)
      this.setFilter()
    } 


    emptyPriceInputs():void{
     this.store.select(productsSelectors.selectPricesValues).subscribe({
      next : res => {
        if (res.lowPrice == null && res.highPrice == null) {
          this.lowPrice.set(null)
          this.highPrice.set(null)
        }
      }
        
     })
    }

    reset() {
      this.lowPrice.set(null);
      this.highPrice.set(null);
      this.store.dispatch(productsActions.resetAllFilters());
    }
 
}
