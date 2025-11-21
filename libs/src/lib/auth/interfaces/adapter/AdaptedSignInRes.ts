export interface AdaptedSignInRes {
  message: string;
  token: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone: string;
    photo: string;
    role: string;
    wishlist: any[];
    addresses: any[];
    createdAt: string;
  };
}
