export interface TestimonialsResponse {
    message: string;
    metadata:Metdata;
    testimonials:Testimonials[];
 
}
 
interface Metdata{
   currentPage: number;
  totalPages: number;
  limit: number;
  totalItems: number;
} 

export interface Testimonials{
  _id: string;
  user: User;
  rating: number;
  content: string;
  status: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
} 

interface User {
    _id: string;
  firstName: string;
  lastName: string;
  photo: string;
}