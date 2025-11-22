import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-product-card',
  imports: [CommonModule, Rating, FormsModule ,CurrencyPipe],
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
 


}
