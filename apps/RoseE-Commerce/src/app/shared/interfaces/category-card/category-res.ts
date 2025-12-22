export interface CategoryRES {
 message: string
  metadata: Metadata
  categories: Categories[]
}

export interface Metadata {
  currentPage: number
  limit: number
  totalPages: number
  totalItems: number
}

export interface Categories {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
  isSuperAdmin: boolean
  productsCount: number
}