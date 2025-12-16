import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Occasions } from 'apps/RoseE-Commerce/src/app/shared/interfaces/occasions-card/occasions-res';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as occasionActions from "./../../../../store/Occasions/occasions.actions"
import * as occasionSelectors from "./../../../../store/Occasions/occaisons.selectors"



@Component({
  selector: 'app-occasions-filter',
  imports: [CommonModule],
  templateUrl: './occasions-filter.component.html',
  styleUrl: './occasions-filter.component.scss',
})
export class OccasionsFilterComponent implements OnInit {

      private readonly store=inject(Store)


      allOccasions$!:Observable<Occasions[]>
      selectedId: string | null = null


      @Output() OccasionSelected = new EventEmitter<string|null>();


      ngOnInit(): void {
          this.getOccasions()
          this.setOccasionsData() 
        
      } 

      // (,") ====> get Occasions from Store 
      getOccasions():void{
        this.store.dispatch(occasionActions.loadOccasions())
      } 

      // (,") ====> set Occasions from Store to array$ []
      setOccasionsData():void{
        this.allOccasions$ = this.store.select(occasionSelectors.selectAllOccasions) 
      } 

      // (,") ====> function to filter products with occasion id
      selectOccasions(id:string){
        this.selectedId=id
        this.OccasionSelected.emit(id) 
      }

      // (,") ====> function to reset filter 
       reset() {
        this.selectedId = null;
        this.OccasionSelected.emit(null);
      } 

     
     
      
}
