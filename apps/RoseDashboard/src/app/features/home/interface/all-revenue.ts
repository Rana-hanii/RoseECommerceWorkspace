export interface AllRevenue {
  status: string;
  data: Data;
}
export interface MonthlyRevenue {
  month: string;
  totalSales: number;
}
export interface Data {
  period: Period;
  trends: Trend[];
}

export interface Trend {
  date: string;
  totalSales: number;
  orderCount: number;
  averageOrderValue: number;
}

export interface Period {
  startDate: string;
  endDate: string;
  interval: string;
}
