export interface ProductReview {
    message: string;
    metadata: Metadata;
    reviews: Review[];
}


export interface Review {
  _id: string;
  product: Product;
  user: User;
  rating: number;
  title: string;
  comment: string;
  status: string;
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

export interface Metadata {
  currentPage: number;
  totalPages: number;
  limit: number;
  totalItems: number;
}