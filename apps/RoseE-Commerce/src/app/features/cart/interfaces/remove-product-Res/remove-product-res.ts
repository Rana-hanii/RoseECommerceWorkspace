export interface RemoveProductRes {
    message: string;
    numOfCartItems: number;
    cart: Cart;
}

export interface Cart {
  _id: string;
  user: string;
  cartItems: any[];
  appliedCoupons: any[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}