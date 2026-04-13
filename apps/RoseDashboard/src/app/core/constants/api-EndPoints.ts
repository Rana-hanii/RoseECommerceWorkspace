export const ApiEndPointsDashboard = {
  // *OVERVIEW PAGE ENDPOINTS
  overview: {
    overAllStatistics: '/statistics/overall', //overview
    productsStatistics: '/statistics/products', //products
    orderStatistics: '/statistics/orders', //orders
    categoryStatistics: '/statistics/categories', //categories
    salesTrends: '/reports/sales/trends', //trends
  },

  // * CATEGORIES ENDPOINTS
  categories: {
    categories: '/categories',
    get: (id: string | null) => `/categories/${id}`,
    update: (id: string | null) => `/categories/${id}`,
    delete: (id: string | null) => `/categories/${id}`,
  },

  //* OCCASIONS ENDPOINTS
  occasions: {
    occasions: `/occasions`,
    add: '/occasions',
    update: (id: string | null) => `/occasions/${id}`,
    delete: (id: string | null) => `/occasions/${id}`,
    get: (id: string) => `/occasions/${id}`,
  },

  //* PRODUCTS ENDPOINTS
  products: {
    products: '/products',
  },

  //* ACCOUNT ENDPOINTS
  account: {
    ProfileData: '/auth/profile-data',
    editProfile: '/auth/editProfile',
    deleteMyAccount: '/auth/deleteMe',
    changePassword: '/auth/change-password',
    logOut: '/auth/logout',
  },
};
