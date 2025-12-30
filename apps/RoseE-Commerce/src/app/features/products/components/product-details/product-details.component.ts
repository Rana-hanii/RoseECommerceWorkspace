import { ProductReview } from './../../interfaces/product-review/product-review';
import { Component, computed, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
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
import { FloatLabel } from 'primeng/floatlabel';
import { ProductReviewRes } from '../../interfaces/product-reviewRes/product-review-res';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, AsyncPipe, CurrencyPipe, GalleriaModule, SectionTitleComponent 
    ,Rating , FormsModule , ReviewCardComponent ,ReactiveFormsModule ,FloatLabel],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit , OnDestroy {

    private readonly store=inject(Store)
    private readonly route=inject(ActivatedRoute)
    private readonly productsService=inject(ProductsService)
    private readonly fb=inject(FormBuilder) 
    private readonly toast=inject(ToastrService) 
    
    productId!:string
    reviews$!:Observable<Review[]>
    value1!:string
    reviewForm!:FormGroup 
    sub!:Subscription




    ngOnInit(): void {
        this.loadProduct()
        this.getReviews()
     
    } 

      loadProduct():void{
        const id = this.route.snapshot.paramMap.get('id')!;
        this.productId=id
        console.log(this.productId , "productid");

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
