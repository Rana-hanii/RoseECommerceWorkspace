export interface GetCategory {
  message: string;
  category: Category;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  isSuperAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}
