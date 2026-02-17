export interface OverAllStatistics {
  message: string;
  statistics: Statistics;
}

export interface Statistics {
  totalProducts: number;
  totalOrders: number;
  totalCategories: number;
  totalRevenue: number;
}
