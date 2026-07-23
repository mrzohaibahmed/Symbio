import type { BusinessHoursEntry } from "@/types";

export const businessHours: BusinessHoursEntry[] = [
  { id: "mon", day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { id: "tue", day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
  { id: "wed", day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
  { id: "thu", day: "Thursday", hours: "9:00 AM – 6:00 PM" },
  { id: "fri", day: "Friday", hours: "9:00 AM – 6:00 PM" },
  { id: "sat", day: "Saturday", hours: "Closed", isClosed: true },
  { id: "sun", day: "Sunday", hours: "Closed", isClosed: true },
];
