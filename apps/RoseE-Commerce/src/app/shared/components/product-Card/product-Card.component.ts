import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProductCardBadgeComponent } from "../product-card-badge/product-card-badge.component";




@Component({
  selector: 'app-product-card',
  imports: [CommonModule, Rating, FormsModule, CurrencyPipe, ProductCardBadgeComponent],
  templateUrl: './product-Card.component.html',
  styleUrl: './product-Card.component.scss',
})
export class ProductCardComponent {

  @Input() image!:string
  @Input() alt!:string
  @Input() title!:string
  @Input() rate!:number
  @Input() price!:number
  @Input() priceBefore!:number
  @Input() value!:number
  @Input() badges:string[]=[]
  
 


}
