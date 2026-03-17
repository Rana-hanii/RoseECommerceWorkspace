export interface DeleteOccasion {
  message: string;
  document: Document;
}

export interface Document {
  _id: string;
  name: string;
  slug: string;
  image: string;
  isSuperAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}
