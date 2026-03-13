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
  },

  //* OCCASIONS ENDPOINTS
  occasions: {
    occasions: `/occasions`,
    add: '/occasions',
    update: (id: string | null) => `/occasions${id}`,
    delete: (id: string | null) => `/occasions${id}`,
  },

  //* PRODUCTS ENDPOINTS
  products: {
    products: '/products',
  },

  //* ACCOUNT ENDPOINTS
  account: {},
};
