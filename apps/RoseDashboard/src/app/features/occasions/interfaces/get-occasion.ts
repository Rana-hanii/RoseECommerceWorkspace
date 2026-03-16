export interface GetOccasion {
  message: string;
  occasion: Occasion;
}

export interface Occasion {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
}
