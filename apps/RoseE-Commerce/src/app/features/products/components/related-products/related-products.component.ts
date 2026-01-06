import { Component, inject, input, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductCardComponent } from "apps/RoseE-Commerce/src/app/shared/components/product-Card/product-Card.component";
import { Carousel } from 'primeng/carousel';
import { RelatedProduct } from '../../interfaces/related-roductRes/related-product-res';
import { SectionTitleComponent } from "apps/RoseE-Commerce/src/app/shared/components/sectionTitle/sectionTitle.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-related-products',
  imports: [CommonModule, ProductCardComponent, Carousel, SectionTitleComponent,  ButtonModule],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss',
})
export class RelatedProductsComponent implements OnInit {


  private readonly Plat_Id=inject(PLATFORM_ID)  


  responsiveOptions: any[] =[]

  relatedProducts=input<RelatedProduct[]>([])

  ngOnInit(): void {
      this.responsive()
  }

  isBrowser(){
        return  isPlatformBrowser(this.Plat_Id)
      }



    responsive():void{
           this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }    



}
