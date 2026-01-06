export interface ProductReviewRes {
      message: string;
      review: Review;
}

export interface Review {
  product: Product;
  user: User;
  rating: number;
  title: string;
  comment: string;
  status: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  photo: string;
}

export interface Product {
  _id: string;
  title: string;
  imgCover: string;
  id: string;
}