export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  serviceInterest: string;
  subject: string;
  message: string;
  /** Honeypot field — must remain empty */
  website?: string;
}

export interface NewsletterFormData {
  email: string;
  website?: string;
}

export interface CareerApplicationData {
  fullName: string;
  email: string;
  phone: string;
  linkedin?: string;
  portfolio?: string;
  experience: string;
  coverLetter: string;
  expectedSalary?: string;
  availability: string;
  jobSlug: string;
  jobTitle: string;
  resumeFileName?: string;
  resumePath?: string;
}

export interface ConsultationFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  businessSize: string;
  industry: string;
  interestedService: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  website?: string;
}

export interface BusinessHoursEntry {
  id: string;
  day: string;
  hours: string;
  isClosed?: boolean;
}

export interface ContactChannel {
  id: string;
  title: string;
  description: string;
  value: string;
  href: string;
  icon: "mail" | "phone" | "map" | "clock";
}
