export interface NavigationItem {
  name: string;
  icon: string;
  active: boolean;
}

export interface HealthStatus {
  id: number;
  name: string;
  date: string;
  status: 'good' | 'warning' | 'critical';
  percentage: number;
  icon: string;
}

export interface Appointment {
  id: number;
  day: string;
  title: string;
  time: string;
  type: string;
  icon: boolean;
  specialty?: string;
}

export interface CalendarDay {
  number: number;
  date: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  appointments: string[];
}