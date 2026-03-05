import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SectionTableComponent } from "../../shared/components/sectionTable/sectionTable.component";
import { ProductsService } from './services/products.service';
import { ProdRes, Product } from './interfaces/prod-res';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [CommonModule, SectionTableComponent,AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {

  private readonly productsService=inject(ProductsService)

  Products$!:Observable<Product[]>; // data من API

  columns = [
    { field: 'title', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'quantity', header: 'Stock' },
    { field: 'sold', header: 'Sales' },
    { field: 'rateCount', header: 'Ratings' },
  ];

  filterFields = ['title', 'price' , 'stock' , 'sales' , 'ratings'];

  onRowSelect(row: any) {
    console.log('Selected Row:', row);
  } 



  ngOnInit(): void {
      this.getProductList()
  }

  getProductList():void{
   this.Products$ =  this.productsService.getAllProducts().pipe(
      map((res:ProdRes)=> res.products)
    )
    console.log(this.Products$);
    
  }
}
