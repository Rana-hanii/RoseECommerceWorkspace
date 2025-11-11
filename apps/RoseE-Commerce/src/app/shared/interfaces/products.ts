export interface Product {
  id: number;
  title: string;
  description: string;
  imgCover: string;
  price: number;
  priceAfterDiscount: number;
  discount: number;
  isInWishlist: boolean;
}
