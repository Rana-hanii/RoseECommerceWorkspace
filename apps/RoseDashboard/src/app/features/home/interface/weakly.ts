export interface Weakly {
  status: string;
  data: Data;
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
