import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { AsyncPipe, CommonModule, isPlatformBrowser} from '@angular/common';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { BestSeller } from 'apps/RoseE-Commerce/src/app/shared/interfaces/bestSeller/best-seller';
import { Observable } from 'rxjs';
import { MainTitleComponent } from "../shared/main-title/main-title.component";
import { ProductCardComponent } from "apps/RoseE-Commerce/src/app/shared/components/product-Card/product-Card.component";
import { GalleriaModule } from 'primeng/galleria';
import { Store } from '@ngrx/store';
import* as WishlistActions from '../../../../store/wishList/wishlist.actions'
import* as WishlistSelectors from '../../../../store/wishList/wishlist.selectors'

@Component({
  selector: 'app-best-selling',
  imports: [CommonModule, CustomButtonComponent, Carousel, ButtonModule, AsyncPipe, MainTitleComponent, ProductCardComponent ,GalleriaModule],
  templateUrl: './bestSelling.component.html',
  styleUrl: './bestSelling.component.scss',
})
export class BestSellingComponent implements OnInit {

  private readonly Plat_Id=inject(PLATFORM_ID)  
  private readonly store=inject(Store)
  
  @Input()bestSellerProducts!: Observable<BestSeller[]> 

    responsiveOptions: any[] =[]
    selectedImages: string[] = [];
    displayGallery = false;


    wishlistIds$!:Observable<string[]>
  
    ngOnInit(): void {
        if (isPlatformBrowser(this.Plat_Id)) {
            this.responsive()
            this.selectWishlistId()
        }
    } 


          addToWishlist(productId: string):void{
              this.store.dispatch(WishlistActions.addToWishlist({productId}))
            }
    
            removeFromWishlist(productId: string):void {
              this.store.dispatch(WishlistActions.removeFromWishlist({ productId }));
            }
    
            selectWishlistId():void{
              this.wishlistIds$ = this.store.select(WishlistSelectors.selectWishlistIds)
            }
    

    isBrowser(){
      return  isPlatformBrowser(this.Plat_Id)
    }

    openGallery(images: string[]) {
        this.selectedImages = images;
        this.displayGallery = true;
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
