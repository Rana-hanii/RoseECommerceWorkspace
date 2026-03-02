export const ApiEndPointsDashboard = {
  // *OVERVIEW PAGE ENDPOINTS
  overview: {
    overAllStatistics: '/statistics/overall', //overview
    productsStatistics: '/statistics/products', //products
    orderStatistics: '/statistics/orders', //orders
    categoryStatistics: '/statistics/categories', //categories
  },

  // * CATEGORIES ENDPOINTS
  categories: {
    allCategories: '/categories',
    addCategories: '/categories',
    getCategory: (id: string | number) => `categories/${id}`,
    updateCategory: (id: string | number) => `/categories/${id}`,
    DeleteCategory: (id: string | number) => `/categories/${id}`,
  },

  //* OCCASIONS ENDPOINTS
  occasions: {},

  //* PRODUCTS ENDPOINTS
  products: {},

  //* ACCOUNT ENDPOINTS
  account: {},
};
