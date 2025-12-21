import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as productsActions from"../../../../store/products/products.actions"
import * as productsSelectors from"../../../../store/products/products.selectors"
import { SortType } from 'apps/RoseE-Commerce/src/app/store/products/products.state';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sort-filter',
  imports: [CommonModule , FormsModule, ToggleSwitch],
  templateUrl: './sort-filter.component.html',
  styleUrl: './sort-filter.component.scss',
})
export class SortFilterComponent implements OnInit , OnDestroy {

  private readonly store=inject(Store)

  checked = false;
  sortType = signal<SortType>('LOW_TO_HIGH')
  sub!:Subscription

  ngOnInit(): void {
     this.setProductsSorting()
     this.setDefaultSort()
  }


  setProductsSorting():void{
    this.store.dispatch(productsActions.filteringProducts({filter:{sorting:this.sortType()}}))
  }

  
  onSortChange(value:boolean):void{
    this.checked = value
    const sort: SortType = value ? 'HIGH_TO_LOW' : 'LOW_TO_HIGH';
    this.sortType.set(sort);
    this.store.dispatch(productsActions.filteringProducts({filter :{sorting:sort}}))
    
  }  


  setDefaultSort():void{
    this.sub =  this.store.select(productsSelectors.selectSortType).subscribe({
      next:res=>{
       if (res===null) {
         this.sortType.set(null)
       }
      }
    })
  } 


  ngOnDestroy(): void {
      this.sub?.unsubscribe()
  }



}
