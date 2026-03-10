export interface CategoriesRes {
  message: string;
  metadata: Metadata;
  categories: Category[];
}


export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
}

interface Metadata {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}