import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as CartActions from '../../store/cart/cart.actions'
import * as CartSelectors from '../../store/cart/cart.selectors'
import { map, Observable } from 'rxjs';
import { CartItem } from './interfaces/userCart/user-cart';
import { CustomButtonComponent } from "../../shared/components/custom-button/custom-button.component";
import { Dialog } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { AdressesComponent } from "../adresses/adresses.component";
import { Address } from '../adresses/interfaces/adress-res';
import { UserAdressesService } from '../adresses/services/user Adresses/user-adresses.service';
import { AdressRes } from '../adresses/interfaces/adress-res';




@Component({
  selector: 'app-cart',
  imports: [CommonModule, CustomButtonComponent, Dialog, AdressesComponent ,AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {

  cartProducts$!:Observable<CartItem[]>
  totalCartPrice!:Observable<number|null>


  checkout:boolean=false
  currentStep:number=0

  
  private readonly store=inject(Store)


  ngOnInit(): void {
      this.loadUserCart()
      this.getUserCart()

      this.getUserAdresses()
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

  checkoutHandler():void{
    this.checkout=true
    this.currentStep=1
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  get progressWidth(): string {
    if (this.currentStep === 1) return '14%';
    if (this.currentStep === 2) return '80%';
    return '0%';
  }

   visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
  
    private readonly Adresses=inject(UserAdressesService)

    userAdresses$!:Observable<Address[]>
    
    getUserAdresses():void{
      this.userAdresses$= this.Adresses.getLoggedUserAdresses().pipe(
        map((res:AdressRes)=>res.addresses)
      )
    }

    onAddressDialogComplete():void{
      this.visible = false;
      this.getUserAdresses();
    }



    // selecting Adress 

    shippingAddress = signal<Address|null>(null)
    selectedAddressId = signal<string | null>(null);

    selectAddress(address: Address): void {
      this.shippingAddress.set(address);
        this.selectedAddressId.set(address._id);
        this.currentStep=2
        console.log(this.shippingAddress());
        
    } 

      
    
}
