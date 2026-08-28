export interface DashboardStats {
  totalTickets: number;
  openTickets: number;
  closedTickets: number;
}

export interface RecentTicket {
  id: number;
  title: string;
  status: string;
}
