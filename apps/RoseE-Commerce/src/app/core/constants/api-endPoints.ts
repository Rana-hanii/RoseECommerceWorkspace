export const API_ENDPOINTS = {
  //*Home endpoints
  home: {
    mostPopular: '/home',
    bestSeller: '/home',
    testimonials: '/testimonials'
  },

  //*Products endpoints
  products: {
    products:'/products'
  },
  categories: {
    categories:'/categories'
  },
  occasions:{
    occasions:'/occasions'
  },

  reviews:{
    reviews:'/reviews'
  },
  
  relatedCategories:{
    relatedCategories:'/related/category'
  },

  // *Wishlist endpoints
  wishlist:{
    wishlist:'/wishlist',
    clearWishlist:'/wishlist/clear'
  },
  
  //*Cart endpoints
  cart: {
    cart:'/cart'
  },

  //*Orders endpoints
  order: {
    cashOrders:'/orders',
    orders:'/orders',
    creditOrders:'/orders/checkout?url=http://localhost:4200/main'

  },



  //(,'') Update Profile
  auth:{
    editProfile:'/auth/editProfile',
    uploadPhoto:'/auth/upload-photo',
    changePassword:'/auth/change-password'
  },
  

  //*All endpoints will be added here

  // *Adresses Endpoints
  adress:{
    updateAdress:'/addresses',
    addAdress:'/addresses',
    removeAdress:'/addresses',
    getAdress:'/addresses',
  }
};
