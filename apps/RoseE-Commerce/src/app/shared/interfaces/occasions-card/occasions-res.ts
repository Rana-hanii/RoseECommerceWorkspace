export interface OccasionsRES {
  message: string;
  metadata: Metadata;
  occasions: Occasions[];
}


export interface Occasions {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
}

export interface Metadata {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}