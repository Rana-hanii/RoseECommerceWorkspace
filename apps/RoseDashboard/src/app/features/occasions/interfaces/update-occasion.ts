export interface UpdateOccasion {
  message: string;
  occasion: Occasion;
}

export interface Occasion {
  _id: string;
  name: string;
  slug: string;
  image: string;
  isSuperAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}
