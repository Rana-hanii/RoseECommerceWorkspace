export interface ClearWishlist {
     message: string;
  wishlist: Wishlist;
}

interface Wishlist {
  _id: string;
  user: string;
  products: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}