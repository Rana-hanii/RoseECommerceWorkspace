import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductCardComponent } from "../../shared/components/product-Card/product-Card.component";
import { ProductsService } from './services/products.service';
import { ProductData, ProductsRES} from '../../shared/interfaces/products/products-res';
import { map, Observable } from 'rxjs';
import { SortPricePipe } from '../../shared/pipes/sort-price/sort-price.pipe';


@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent ,AsyncPipe ,SortPricePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {

  private readonly productsService=inject(ProductsService)


  allProducts$!:Observable<ProductData[]>


  ngOnInit(): void {
      this.getProducts()
      
      
  }

  // (,") == > get Products
  getProducts():void{
      this.allProducts$ = this.productsService.getAllProducts().pipe(
        map((res:ProductsRES)=>res.products.map(item=>
          ({...item , 
            badges:this.getBadge(item)
          }))))

          console.log(this.allProducts$);
  } 

  // (,") == > Condition to get badge value
      getBadge(product:ProductData):string[]{ 
  
        const badges:string[]=[]
  
        if(product.createdAt.includes('2025')){
          badges.push('new')
        }
        if(product.sold && product.sold >= 100){
         badges.push('hot')
        }
  
        if(product.quantity < 1){
          badges.push('out of stock')
        }
  
        return badges
      }
}
