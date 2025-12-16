import { Component, EventEmitter, inject, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as categoriesActions from "../../../../store/Categories/categories.actions"
import * as categoriesSelectors from "../../../../store/Categories/categories.selectors"
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories} from 'apps/RoseE-Commerce/src/app/shared/interfaces/category-card/category-res';

@Component({
  selector: 'app-category-filter',
  imports: [CommonModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss',
})
export class CategoryFilterComponent implements OnInit {

  private readonly store=inject(Store)

  allCategories$!:Observable<Categories[]>
  selectedId: string | null = null
  

  @Output() categorySelected = new EventEmitter<string|null>();
    


  ngOnInit(): void {
      this.getCategories()
      this.setCategories()
  } 


  // (,") ====> get Categories from Store 
  getCategories():void{
    this.store.dispatch(categoriesActions.loadCategories())
  }

  // (,") ====> set Categories in the array 
  setCategories():void{
    this.allCategories$=this.store.select(categoriesSelectors.selectAllCategories)
  } 
  
  // (,") ====> function to filter products with category id
  selectCategory(id:string) {
    this.selectedId=id
    this.categorySelected.emit(id) 
  } 

  // (,") ====> function to reset filter 
  reset() {
      this.selectedId = null;
      this.categorySelected.emit(null);
  }



}
