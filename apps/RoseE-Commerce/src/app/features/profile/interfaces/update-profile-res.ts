export interface UpdateProfileRes {
     message: string;
        user: User;
}


export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  phone: string;
  photo: string;
  role: string;
  wishlist: any[];
  addresses: any[];
  createdAt: string;
}