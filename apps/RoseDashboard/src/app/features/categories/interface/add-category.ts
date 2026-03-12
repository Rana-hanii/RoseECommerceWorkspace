export interface AddCategory {
  message: string;
  category: Category;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  isSuperAdmin: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
