import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as productsSelectors from '../../../../store/products/products.selectors';
import * as productsActions from '../../../../store/products/products.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { GalleriaModule } from 'primeng/galleria';
import { SectionTitleComponent } from "apps/RoseE-Commerce/src/app/shared/components/sectionTitle/sectionTitle.component";
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Product } from 'apps/RoseE-Commerce/src/app/shared/interfaces/products/productDetails.res';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, AsyncPipe, CurrencyPipe, GalleriaModule, SectionTitleComponent ,Rating , FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit  {

    private readonly store=inject(Store)
    private readonly route=inject(ActivatedRoute)

    ngOnInit(): void {
        this.loadProduct()
     
    } 

      loadProduct():void{
        const id = this.route.snapshot.paramMap.get('id')!;
        this.store.dispatch(productsActions.loadProductbyId({id}))
      }


      productFromStore: Signal<Product | null> = toSignal(
        this.store.select(productsSelectors.selectSpecificProduct),{ initialValue: null }); 

      galleriaImages = computed(() => {
        const product = this.productFromStore();
          if (!product || !Array.isArray(product.images)) {
          return [];
        }
        
        return product.images.map(img => ({
          itemImageSrc: img,
          thumbnailImageSrc: img
        }));
      });



      responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];


   
}
