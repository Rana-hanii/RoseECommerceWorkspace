import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProductCardBadgeComponent } from "../product-card-badge/product-card-badge.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, Rating, FormsModule, CurrencyPipe, ProductCardBadgeComponent, RouterLink],
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
  @Input() images!:string[] 
  @Input() wishlistBtn=false
  @Input() id!:string
  @Output() imgNav:EventEmitter<string[]> =new EventEmitter();
  
  
  isWishlisted = false;

  
  toggleWishlist() {
    this.isWishlisted = !this.isWishlisted; 
  }

  previewNav():void{
    this.imgNav.emit(this.images)
  }


    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

}
