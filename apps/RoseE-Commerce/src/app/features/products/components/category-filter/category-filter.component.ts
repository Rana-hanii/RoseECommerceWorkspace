import { Component, EventEmitter, inject, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as categoriesActions from "../../../../store/Categories/categories.actions"
import * as categoriesSelectors from "../../../../store/Categories/categories.selectors"
import * as productsSelectors from "../../../../store/products/products.selectors"
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Categories} from 'apps/RoseE-Commerce/src/app/shared/interfaces/category-card/category-res';
import { ResetButtonComponent } from "apps/RoseE-Commerce/src/app/shared/components/reset-button/reset-button.component";

@Component({
  selector: 'app-category-filter',
  imports: [CommonModule, ResetButtonComponent],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss',
})
export class CategoryFilterComponent implements OnInit , OnDestroy {

  private readonly store=inject(Store)

  allCategories$!:Observable<Categories[]>
  selectedId = signal<string[]>([])
  sub!:Subscription
  

  @Output() categorySelected = new EventEmitter<string[]|null>();
    


  ngOnInit(): void {
      this.getCategories()
      this.setCategories()
      this.emptyFilteredCategories()
  } 


  // (,") ====> get Categories from Store 
  getCategories():void{
    this.store.dispatch(categoriesActions.loadCategories())
  }

  // (,") ====> set Categories in the array 
  setCategories():void{
    this.allCategories$=this.store.select(categoriesSelectors.selectAllCategories)
    
  } 

  // (,") ====> empty the array of selected Id
  emptyFilteredCategories():void{
   this.sub =  this.store.select(productsSelectors.selectCategoriesIDs).subscribe({
      next: res => {
        if (res?.length == 0 ) {
          this.selectedId.set([])
          
        }
      }
    })
  }
  
  // (,") ====> function to filter products with category id
  selectCategory(id:string) {
    const current = this.selectedId();
    if (current.includes(id)) {
      this.selectedId.set(current.filter(item => item !== id));
    }else{
       this.selectedId.set([...current, id]);
    }
    this.categorySelected.emit(this.selectedId()) 
  } 

  // (,") ====> function to reset filter 
  reset() {
      this.selectedId.set([])
      this.categorySelected.emit([]);
  }
  
  ngOnDestroy(): void {
      this.sub?.unsubscribe()
  }

}
