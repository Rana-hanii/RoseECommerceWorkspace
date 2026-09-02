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
import { CheckoutService } from './services/checkout.service';
import { CashCheckoutReq } from './interfaces/cash-checkout-req/cash-checkout-req';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




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
  private readonly checkoutService=inject(CheckoutService)
  private readonly router=inject(Router)
  private readonly toastr=inject(ToastrService)


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
      
        console.log(this.shippingAddress());
        
    }  

    nextBtn():void{
      if (!this.selectedAddressId()) return;
      this.currentStep=2
    }

    // selecting payment method

    readonly paymentMethods = [
      {
        id: 'cash' as const,
        title: 'Cash on Delivery',
        description: 'Pay with cash when your order arrives at your doorstep.',
        image: '/payment/cash.png',
      },
      {
        id: 'credit' as const,
        title: 'Credit / Debit Card',
        description: 'Pay securely online using your credit or debit card.',
        image: '/payment/credit.png',
      },
    ];

    selectedPaymentMethod = signal<'cash' | 'credit' | null>(null);

    selectPaymentMethod(method: 'cash' | 'credit'): void {
      this.selectedPaymentMethod.set(method);
    }

    isPlacingOrder = signal(false);

    private buildCheckoutBody(): CashCheckoutReq | null {
      const address = this.shippingAddress();
      if (!address) return null;

      return {
        shippingAddress: {
          street: address.street,
          phone: address.phone,
          city: address.city,
          lat: address.lat,
          long: address.long,
        },
      };
    }

    placeOrder(): void {
      const method = this.selectedPaymentMethod();
      const body = this.buildCheckoutBody();
      if (!method || !body || this.isPlacingOrder()) return;

      this.isPlacingOrder.set(true);

      if (method === 'cash') {
        this.checkoutService.createCashOrder(body).subscribe({
          next: () => {
            this.store.dispatch(CartActions.loadCart());
            this.toastr.success('Order placed successfully', 'Success');
            this.router.navigate(['/main/orders/allOrders']);
          },
          error: () => {
            this.isPlacingOrder.set(false);
            this.toastr.error('Could not place order', 'Error');
          },
        });
        return;
      }

      this.checkoutService.createCreditOrder(body).subscribe({
        next: (res) => {
          window.location.href = res.session.url;
        },
        error: () => {
          this.isPlacingOrder.set(false);
          this.toastr.error('Could not start card checkout', 'Error');
        },
      });
    }

}
