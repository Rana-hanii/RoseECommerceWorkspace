import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as WishlistActions from '../../store/wishList/wishlist.actions'
import * as WishlistSelectors from '../../store/wishList/wishlist.selectors'
import { Observable } from 'rxjs';
import { Product } from './interfaces/wishlist-Res/wishlist-res';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule ,AsyncPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {

  private readonly store=inject(Store)
  private readonly wishlistService=inject(WishlistService)

  wishlistedProducts$!:Observable<Product[]>


  ngOnInit(): void {
      this.loadWishlist()
      this.setWishlistProducts()
  }

  loadWishlist():void{
    this.store.dispatch(WishlistActions.loadWishlist())
  } 


  setWishlistProducts():void{
    this.wishlistedProducts$= this.store.select(WishlistSelectors.selectWishlistArray)
    console.log(this.wishlistedProducts$);
    
  }

  removeItem(id:string):void{
    this.store.dispatch(WishlistActions.removeFromWishlist({productId:id}))
  }

  clearWishlist():void{
    this.store.dispatch(WishlistActions.clearWishlist())
    this.loadWishlist()
  }

}
