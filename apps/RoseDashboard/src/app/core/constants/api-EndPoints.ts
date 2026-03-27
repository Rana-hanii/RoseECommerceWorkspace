export const ApiEndPointsDashboard = {
  // *OVERVIEW PAGE ENDPOINTS
  overview: {
    overAllStatistics: '/statistics/overall', //overview
    productsStatistics: '/statistics/products', //products
    orderStatistics: '/statistics/orders', //orders
    categoryStatistics: '/statistics/categories', //categories
    salesTrends:
      '/reports/sales/trends?startDate=2023-01-01&endDate=2023-12-31&interval=weekly',
  },

  // * CATEGORIES ENDPOINTS
  categories: {
    allCategories: '/categories?=limit=100',
    addCategories: '/categories',
    getCategory: (id: string | number) => `/categories/${id}`,
    updateCategory: (id: string | null) => `/categories/${id}`,
    DeleteCategory: (id: string | null) => `/categories/${id}`,
  },

  //* OCCASIONS ENDPOINTS
  occasions: {},
  //* PRODUCTS ENDPOINTS
  products: {},

  //* ACCOUNT ENDPOINTS
  account: {},
};
//* ACCOUNT ENDPOINTS
