import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Occasions } from 'apps/RoseE-Commerce/src/app/shared/interfaces/occasions-card/occasions-res';
import {  Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as occasionActions from "./../../../../store/Occasions/occasions.actions"
import * as occasionSelectors from "./../../../../store/Occasions/occaisons.selectors"
import * as productsSelectors from "../../../../store/products/products.selectors"
import { ResetButtonComponent } from "apps/RoseE-Commerce/src/app/shared/components/reset-button/reset-button.component";



@Component({
  selector: 'app-occasions-filter',
  imports: [CommonModule, ResetButtonComponent],
  templateUrl: './occasions-filter.component.html',
  styleUrl: './occasions-filter.component.scss',
})
export class OccasionsFilterComponent implements OnInit ,OnDestroy {

      private readonly store=inject(Store)


      allOccasions$!:Observable<Occasions[]>
      selectedId= signal<string[]>([])
      sub!:Subscription

      @Output() OccasionSelected = new EventEmitter<string[]|null>();


      ngOnInit(): void {
          this.getOccasions()
          this.setOccasionsData() 
          this.emptyFilteredOccasions()
      } 

      // (,") ====> get Occasions from Store 
      getOccasions():void{
        this.store.dispatch(occasionActions.loadOccasions())
      } 

      // (,") ====> set Occasions from Store to array$ []
      setOccasionsData():void{
        this.allOccasions$ = this.store.select(occasionSelectors.selectAllOccasions) 
      } 


      // (,") ====> empty the array of selected Id
      emptyFilteredOccasions():void{
        this.sub = this.store.select(productsSelectors.selectCategoriesIDs).subscribe({
          next: res => {
            if (res?.length == 0 ) {
              this.selectedId.set([])
              
            }
          }
        })
      }

      // (,") ====> function to filter products with occasion id
      selectOccasions(id:string){
        const current = this.selectedId();
          if (current.includes(id)) {
            this.selectedId.set(current.filter(item => item !== id));
          }else{
            this.selectedId.set([...current, id]);
          }
          this.OccasionSelected.emit(this.selectedId()) 
      }

      // (,") ====> function to reset filter 
       reset() {
        this.selectedId.set([])
        this.OccasionSelected.emit([]);
      } 

     
     ngOnDestroy(): void {
         this.sub.unsubscribe()
     }
      
}
