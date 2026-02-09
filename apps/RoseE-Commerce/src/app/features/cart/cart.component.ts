import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as CartActions from '../../store/cart/cart.actions'
import * as CartSelectors from '../../store/cart/cart.selectors'
import { Observable } from 'rxjs';
import { CartItem } from './interfaces/userCart/user-cart';




@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {

  cartProducts$!:Observable<CartItem[]>
  totalCartPrice!:Observable<number|null>

  private readonly store=inject(Store)


  ngOnInit(): void {
      this.loadUserCart()
      this.getUserCart()
  }



  loadUserCart():void{
    this.store.dispatch(CartActions.loadCart())
  }


  getUserCart():void{
   this.cartProducts$ = this.store.select(CartSelectors.selectUserCart)
   this.totalCartPrice=this.store.select(CartSelectors.selectUserTotalPrice)
   console.log(this.cartProducts$);
   
  } 


  increaseItem(item:CartItem):void{
    this.store.dispatch(CartActions.updateItemQuantity({
      productId:item.product._id , 
      quantity:item.quantity+1
    }))
  } 


  decreaseItem(item:CartItem):void{
    if (item.quantity>=2) {
      this.store.dispatch(CartActions.updateItemQuantity({
      productId:item.product._id , 
      quantity:item.quantity-1
    }))
    }else{
      this.removeItemFromCart(item.product._id)
    }
  } 


  removeItemFromCart(id:string):void{
    this.store.dispatch(CartActions.removeItemFromCart({productId:id}))
  }


  clearAllCartItems():void{
    this.store.dispatch(CartActions.clearCart())
  }

}
