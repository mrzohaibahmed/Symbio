import type { Statistic } from "@/types";

export const aboutStatistics: Statistic[] = [
  { id: "clients", value: 500, suffix: "+", label: "Businesses Served" },
  { id: "years", value: 15, suffix: "+", label: "Years of Excellence" },
  { id: "advisors", value: 40, suffix: "+", label: "Specialist Advisors" },
  { id: "retention", value: 96, suffix: "%", label: "Client Retention" },
];

export const companyStatistics: Statistic[] = aboutStatistics;
