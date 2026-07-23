import type { ContactChannel, FAQ, FeatureItem } from "@/types";
import { companyInfo } from "@/constants";

export const contactHero = {
  title: "Contact Symbio Advisory",
  description:
    "Tell us about your business needs. We’ll connect you with the right advisor for finance, tax, compliance, systems, and strategic growth support.",
  image:
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Professional contacting an advisory team by phone in a modern office",
} as const;

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    title: "Email Us",
    description: "We typically respond within one business day.",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    icon: "mail",
  },
  {
    id: "phone",
    title: "Phone / WhatsApp",
    description: "Call or message our team during business hours.",
    value: companyInfo.phoneDisplay,
    href: `tel:${companyInfo.phone}`,
    icon: "phone",
  },
  {
    id: "visit",
    title: "Visit Us",
    description: "Multiple offices available by appointment.",
    value: "Lahore, Islamabad, Okara, UK, Jhelum",
    href: "/about#about-offices-heading",
    icon: "map",
  },
  {
    id: "hours",
    title: "Business Hours",
    description: "Monday through Friday.",
    value: "9:00 AM - 6:00 PM",
    href: "#business-hours",
    icon: "clock",
  },
];

export const contactFaqs: FAQ[] = [
  {
    id: "contact-faq-1",
    question: "How quickly will someone respond?",
    answer:
      "We aim to respond to all inquiries within one business day and prioritize consultation requests for scheduling.",
  },
  {
    id: "contact-faq-2",
    question: "Can we book a virtual consultation?",
    answer:
      "Yes. Introductory consultations can be handled virtually, and in-person meetings can be arranged where needed.",
  },
  {
    id: "contact-faq-3",
    question: "What information should I include in my message?",
    answer:
      "Share your business context, the challenge you need help with, and any timing requirements so we can route your inquiry correctly.",
  },
  {
    id: "contact-faq-4",
    question: "Do you work with startups and established enterprises?",
    answer:
      "Yes. We support entrepreneurs, companies, and growing organizations across a range of business needs.",
  },
];

export const careersHero = {
  title: "Build your career at Symbio Advisory",
  description:
    "Join a team that combines advisory depth with digital delivery — and measures success by client outcomes.",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Collaborative team working together in a modern workplace",
} as const;

export const careersWhyJoin: FeatureItem[] = [
  {
    id: "impact",
    title: "Meaningful Impact",
    description: "Work directly with leaders on problems that change how organizations operate.",
    icon: "award",
  },
  {
    id: "growth",
    title: "Accelerated Growth",
    description: "Learn across advisory, tax, accounting, and technology — not just one silo.",
    icon: "layers",
  },
  {
    id: "culture",
    title: "Supportive Culture",
    description: "Collaborate with specialists who value clarity, ownership, and respect.",
    icon: "heart-handshake",
  },
  {
    id: "flexibility",
    title: "Flexible Ways of Working",
    description: "Hybrid options and practical schedules designed around high-quality delivery.",
    icon: "users",
  },
  {
    id: "tools",
    title: "Modern Tooling",
    description: "Use contemporary systems and methods that make excellent work sustainable.",
    icon: "cpu",
  },
  {
    id: "support",
    title: "Mentorship & Support",
    description: "Get coaching from senior practitioners invested in your long-term trajectory.",
    icon: "headset",
  },
];

export const careersCulture = {
  eyebrow: "Culture",
  title: "How we work together",
  description:
    "We are builders and advisors — curious, accountable, and client-first. We debate ideas rigorously and support each other generously.",
  points: [
    "Clarity over jargon",
    "Outcomes over activity",
    "Feedback without ego",
    "Delivery with craftsmanship",
  ],
} as const;

export const careersBenefits = [
  "Competitive compensation and performance bonuses",
  "Health, dental, and vision insurance",
  "Hybrid and remote-friendly roles where possible",
  "Professional development and certification support",
  "Paid time off and parental leave",
  "Modern equipment and collaboration tools",
] as const;

export const hiringProcess = [
  {
    id: "apply",
    step: 1,
    title: "Apply",
    description: "Submit your application with resume and a short cover letter.",
  },
  {
    id: "screen",
    step: 2,
    title: "Screening",
    description: "A recruiter conversation to align on experience, goals, and role fit.",
  },
  {
    id: "interview",
    step: 3,
    title: "Interviews",
    description: "Meet hiring managers and specialists for case and culture conversations.",
  },
  {
    id: "offer",
    step: 4,
    title: "Offer",
    description: "Receive a clear offer and onboarding plan to set you up for success.",
  },
] as const;

export const careersFaqs: FAQ[] = [
  {
    id: "careers-faq-1",
    question: "Do you offer remote roles?",
    answer:
      "Some roles are remote-friendly or hybrid. Each job listing specifies location expectations.",
  },
  {
    id: "careers-faq-2",
    question: "How long does the hiring process take?",
    answer:
      "Most processes complete within two to four weeks depending on scheduling and role seniority.",
  },
  {
    id: "careers-faq-3",
    question: "Can I apply to multiple roles?",
    answer:
      "Yes. Apply to each role separately so we can evaluate fit against specific requirements.",
  },
  {
    id: "careers-faq-4",
    question: "What should I include in my application?",
    answer:
      "A current resume, a concise cover letter, and any LinkedIn or portfolio links that demonstrate relevant work.",
  },
];

export const businessSizeOptions = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-1000", label: "201–1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
] as const;

export const industryOptions = [
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Technology",
  "Education",
  "Construction",
  "Real Estate",
  "Restaurants",
  "NGOs",
  "Other",
] as const;

export const experienceOptions = [
  { value: "0-1", label: "0–1 years" },
  { value: "1-3", label: "1–3 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "5-8", label: "5–8 years" },
  { value: "8+", label: "8+ years" },
] as const;

export const availabilityOptions = [
  { value: "immediate", label: "Immediately" },
  { value: "2-weeks", label: "Within 2 weeks" },
  { value: "1-month", label: "Within 1 month" },
  { value: "2-months", label: "Within 2 months" },
  { value: "negotiable", label: "Negotiable" },
] as const;

export const preferredTimeOptions = [
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
] as const;
