import { setCategories } from './../../store/Categories/categories.actions';
import { Component, inject, OnInit, Signal, ViewChild } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductCardComponent } from "../../shared/components/product-Card/product-Card.component";
import { ProductsService } from './services/products.service';
import { ProductData, ProductsRES} from '../../shared/interfaces/products/products-res';
import { map, Observable, Subscription, tap } from 'rxjs';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Store } from '@ngrx/store';
import * as productsActions from '../../store/products/products.actions';
import * as productsSelectors from '../../store/products/products.selectors';
import { CategoryFilterComponent } from "./components/category-filter/category-filter.component";
import { OccasionsFilterComponent } from "./components/occassions-filter/occasions-filter.component";
import { ResetButtonComponent } from "../../shared/components/reset-button/reset-button.component";
import { PriceFilterComponent } from "./components/price-filter/price-filter.component";
import { RatingsFilterComponent } from "./components/ratings-filter/ratings-filter.component";
import { SortFilterComponent } from "./components/sort-filter/sort-filter.component";
import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';


@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent, AsyncPipe, PaginatorModule,ButtonModule,DrawerModule,
     CategoryFilterComponent, OccasionsFilterComponent, ResetButtonComponent, PriceFilterComponent,
      RatingsFilterComponent, SortFilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit  {

  private readonly productsService=inject(ProductsService)
  private readonly store=inject(Store)


   sortedProducts$!:Observable<ProductData[]>
   paginatedProducts$!: Observable<ProductData[]>;
  
  
   text!:Signal<string>
   sub!:Subscription 

   selectedCategoryId: string | null = null;


   visible= false;

  ngOnInit(): void {
      this.setProducts()
      this.getProducts()

      this.search()
  }

      // (,") == > Getting the search value from NavBar
        search():void{
          this.text=this.productsService.searchText
        }


       // (,") == > Set Products in Store
      setProducts():void{
        this.store.dispatch(productsActions.loadProducts())
        
      } 

      // (,") == > get Sorted Products from Store
      getProducts():void{
        this.sortedProducts$=this.store.select(productsSelectors.selectFilteredProducts)
        this.pagination()
      }

     


      //(,") ==> paginator function and make the first page shown  
        first = 0;
        rows = 9;
        onPageChange(event: PaginatorState) {
            this.first = event.first ?? 0;
            this.rows = event.rows ?? 10;
            this.pagination()
        } 


        pagination():void{
            this.paginatedProducts$=this.sortedProducts$.pipe(
             map(products => products.slice(this.first, this.first + this.rows)))
        }
        

        onCategorySelected(categoryID: string[]|null) {
          this.store.dispatch(productsActions.filteringProducts({ filter:{categoryID}}));
          this.first = 0;
          this.pagination();
        }
      
        onOccationsSelected(occasionID:string[]|null){
          this.store.dispatch(productsActions.filteringProducts({filter :{occasionID}}))
          this.first=0
          this.pagination()
        }

        resetAll():void{
          this.store.dispatch(productsActions.resetAllFilters())
        } 



             @ViewChild('drawerRef') drawerRef!: Drawer;
        
            closeCallback(e:any): void {
                this.drawerRef.close(e);
            }
}
