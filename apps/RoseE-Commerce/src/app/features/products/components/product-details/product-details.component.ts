import { addToWishlist } from './../../../../store/wishList/wishlist.actions';
import { ProductReview } from './../../interfaces/product-review/product-review';
import { Component, computed, inject, OnDestroy, OnInit, PLATFORM_ID, signal, Signal } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe, isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as productsSelectors from '../../../../store/products/products.selectors';
import * as productsActions from '../../../../store/products/products.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { GalleriaModule } from 'primeng/galleria';
import { SectionTitleComponent } from "apps/RoseE-Commerce/src/app/shared/components/sectionTitle/sectionTitle.component";
import { Rating } from 'primeng/rating';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from 'apps/RoseE-Commerce/src/app/shared/interfaces/products/productDetails.res';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ProductsService } from '../../services/products.service';
import { map, Observable, Subscription } from 'rxjs';
import { Review } from '../../interfaces/product-review/product-review';
import { ProductReviewRes } from '../../interfaces/product-reviewRes/product-review-res';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../../home/services/home.service';
import { RelatedProduct, RelatedProductRes } from '../../interfaces/related-roductRes/related-product-res';
import { RelatedProductsComponent } from "../related-products/related-products.component";
import* as WishlistActions from '../../../../store/wishList/wishlist.actions'
import* as CartActions from '../../../../store/cart/cart.actions'

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, AsyncPipe, CurrencyPipe, GalleriaModule, SectionTitleComponent,
    Rating, FormsModule, ReviewCardComponent, ReactiveFormsModule, RelatedProductsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit , OnDestroy {

    private readonly store=inject(Store)
    private readonly route=inject(ActivatedRoute)
    private readonly productsService=inject(ProductsService)
    private readonly fb=inject(FormBuilder) 
    private readonly toast=inject(ToastrService) 
    private readonly homeService=inject(HomeService) 
    private readonly plat_id=inject(PLATFORM_ID) 
    
    productId!:string
    reviews$!:Observable<Review[]>
    value1!:string
    reviewForm!:FormGroup 
    sub!:Subscription
    isLogin=signal<boolean>(true)
    relatedProducts=signal<RelatedProduct[]>([])
  



    ngOnInit(): void {
        this.loadProduct()
        this.getReviews()
        this.checkLoggedUser()
        this.getAllrelatedProducts()
        this.isBrowser()
     
    } 


       isBrowser(){
              return  isPlatformBrowser(this.plat_id)
            }

      loadProduct():void{
        const id = this.route.snapshot.paramMap.get('id')!;
        this.productId=id

        this.reviewForm   = this.fb.group({
          product: this.productId,
          rating:['' , [Validators.required ,  Validators.max(5)]],
          title:['' , [Validators.required]],
          comment:['' , [Validators.required]]
      }) 
        
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


      getReviews():void{
         this.reviews$= this.productsService.getProductReviews(this.productId).pipe(
          map((res:ProductReview)=>res.reviews)          
        )
      } 


      onRating(value:number):void{
          this.reviewForm.patchValue({rating:Number(value)})
          
        } 

        addReview():void{
          if (this.reviewForm.invalid) {
            this.toast.error('you have  to Give Rating and writing a title and comment')
          }else if(this.reviewForm.valid){  
            this.sub =  this.productsService.postReview(this.reviewForm.value).subscribe({
            next: (res:ProductReviewRes) =>{
              console.log(res , 'respooooonse');
              console.log(this.reviewForm.value , ' foooooorm review');
              this.toast.success('Success' , res.message)
            },error: (err:ProductReviewRes)=>{
              this.toast.error('You can add review once and you had did it before' )
            }
          })

          }
         
        } 

        checkLoggedUser():void{
          this.isLogin = this.homeService.isLogged
        }



        getAllrelatedProducts():void{
          this.sub = this.productsService.getRelatedProducts(this.productId).subscribe({
            next:(res:RelatedProductRes)=>{
              this.relatedProducts.set(res.relatedProducts)
    
            }
          })
         
        } 


        addToWishlist(productId:string):void{
          this.store.dispatch(WishlistActions.addToWishlist({productId}))
         
        }


        addToCart(productId:string):void{
          this.store.dispatch(CartActions.addItemToCart({productId}))
        }


   

        ngOnDestroy(): void {
            this.sub?.unsubscribe()
        }




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
