import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CashCheckout } from '../interfaces/cash-checkout/cash-checkout';
import { CashCheckoutReq } from '../interfaces/cash-checkout-req/cash-checkout-req';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { Observable } from 'rxjs';
import { OrdersRes } from '../../orders/interfaces/orders-res/orders-res';
import { CreditOrderRes } from '../../orders/interfaces/creditOrder-Res/credit-order-res';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private readonly apiService=inject(ApiService) 


  // (,'') Create Cash Order

  createCashOrder(form:CashCheckoutReq):Observable<CashCheckout>{
    return this.apiService.post<CashCheckout>(`${API_ENDPOINTS.order.cashOrders}` , form)
  } 

  // (,'') Get All Orders 
  getAllOrders():Observable<OrdersRes>{
    return this.apiService.get<OrdersRes>(`${API_ENDPOINTS.order.orders}`)
  }


  // (,'') Create Credit Order
  createCreditOrder(form:CashCheckoutReq):Observable<CreditOrderRes>{
    return this.apiService.post<CreditOrderRes>(`${API_ENDPOINTS.order.creditOrders}` , form)
  } 

  
}
