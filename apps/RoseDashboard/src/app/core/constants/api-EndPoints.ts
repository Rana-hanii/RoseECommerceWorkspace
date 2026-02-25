export const ApiEndPointsDashboard = {
  // *OVERVIEW PAGE ENDPOINTS
  overview: {
    overAllStatistics: '/statistics/overall',
    productsStatistics: '/statistics/products',
    orderStatistics: '/statistics/orders',
    categoryStatistics: '/statistics/categories',
    salesTrends: '/reports/sales/trends',
  },

  // * CATEGORIES ENDPOINTS
  categories: {},

  //* OCCASIONS ENDPOINTS
  occasions: {},

  //* PRODUCTS ENDPOINTS
  products: {},

  //* ACCOUNT ENDPOINTS
  account: {
    ProfileData: '/auth/profile-data',
    editProfile: '/auth/editProfile',
    deleteMyAccount: '/auth/deleteMe',
    changePassword: '/auth/change-password',
    logOut: '/auth/logout',
  },
};
