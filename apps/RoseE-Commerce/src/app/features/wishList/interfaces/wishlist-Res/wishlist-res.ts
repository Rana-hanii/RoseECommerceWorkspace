export interface WishlistRes {
  message: string;
  count: number;
  wishlist: Wishlist;
}

export interface Wishlist {
  _id: string;
  user: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Product {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  priceAfterDiscount: number;
  rateAvg: number;
  id: string;
}