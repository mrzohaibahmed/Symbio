import type { FAQ } from "@/types";

/**
 * FAQ catalog referenced by service detail pages and shared accordion usage.
 */
export const faqs: FAQ[] = [
  {
    id: "ab-faq-1",
    question: "Can you work with our current accounting records and system?",
    answer:
      "Yes. We can work with your current records and systems, then improve structure, accuracy, and reporting where needed.",
    category: "accounting-bookkeeping",
  },
  {
    id: "ab-faq-2",
    question: "Can you clean up incomplete or outdated financial records?",
    answer:
      "Absolutely. We often begin by organizing records, cleaning up books, and reconciling balances before ongoing support starts.",
    category: "accounting-bookkeeping",
  },
  {
    id: "ab-faq-3",
    question: "What accounting support do you provide?",
    answer:
      "We support bookkeeping, reporting, profit and loss tracking, bank reconciliation, and financial statements.",
    category: "accounting-bookkeeping",
  },
  {
    id: "tax-faq-1",
    question: "Do you help with tax registrations and return filing?",
    answer:
      "Yes. We support registrations, return filing, withholding matters, and broader tax compliance requirements.",
    category: "tax-advisory-compliance",
  },
  {
    id: "tax-faq-2",
    question: "Can you help with tax notices and representation?",
    answer:
      "Yes. We can assist with tax opinions, representation, and professional handling of notices and related matters.",
    category: "tax-advisory-compliance",
  },
  {
    id: "tax-faq-3",
    question: "What kind of tax support do businesses usually need most?",
    answer:
      "Most businesses need help staying on top of deadlines, registrations, filings, withholding, and changing compliance expectations.",
    category: "tax-advisory-compliance",
  },
  {
    id: "aa-faq-1",
    question: "What is included in audit and assurance support?",
    answer:
      "We support internal audits, system reviews, compliance audits, forensic reviews, and broader assurance services.",
    category: "audit-assurance-services",
  },
  {
    id: "aa-faq-2",
    question: "Can audit work help improve weak controls?",
    answer:
      "Yes. Our reviews identify control gaps, approval weaknesses, and reporting issues so businesses can strengthen reliability.",
    category: "audit-assurance-services",
  },
  {
    id: "aa-faq-3",
    question: "Do you perform forensic reviews?",
    answer:
      "Yes. We support forensic reviews where businesses need help understanding unusual transactions, losses, or control failures.",
    category: "audit-assurance-services",
  },
  {
    id: "bfa-faq-1",
    question: "How does business and financial advisory help a growing business?",
    answer:
      "It helps businesses plan better, monitor performance, manage financing needs, and make stronger strategic decisions.",
    category: "business-financial-advisory",
  },
  {
    id: "bfa-faq-2",
    question: "Do you help with budgeting and feasibility studies?",
    answer:
      "Yes. We support budgeting, planning, feasibility studies, financing support, and performance improvement.",
    category: "business-financial-advisory",
  },
  {
    id: "bfa-faq-3",
    question: "Can you assist with restructuring or turnaround planning?",
    answer:
      "Yes. We help businesses assess options, improve performance, and support practical restructuring decisions.",
    category: "business-financial-advisory",
  },
  {
    id: "erp-faq-1",
    question: "Do you help implement accounting and ERP systems?",
    answer:
      "Yes. We help businesses implement systems, automate workflows, migrate data, and improve reporting.",
    category: "erp-implementation-automation",
  },
  {
    id: "erp-faq-2",
    question: "Can you support training and reporting after implementation?",
    answer:
      "Yes. User training and reporting system support are part of helping the business use the system effectively.",
    category: "erp-implementation-automation",
  },
  {
    id: "erp-faq-3",
    question: "Do you only work on new implementations?",
    answer:
      "No. We can also improve existing systems, workflows, reporting, and adoption where businesses already have a platform in place.",
    category: "erp-implementation-automation",
  },
  {
    id: "cac-faq-1",
    question: "Do you help with company incorporation and filings?",
    answer:
      "Yes. We support company incorporation, regulatory filings, secretarial compliance, and related corporate matters.",
    category: "corporate-advisory-compliance",
  },
  {
    id: "cac-faq-2",
    question: "Can you support corporate structuring and M&A matters?",
    answer:
      "Yes. We support corporate structuring, mergers and acquisitions, and broader corporate legal guidance.",
    category: "corporate-advisory-compliance",
  },
  {
    id: "cac-faq-3",
    question: "Why is corporate compliance important for growing businesses?",
    answer:
      "It helps businesses avoid filing delays, maintain structure, manage changes properly, and stay future-ready.",
    category: "corporate-advisory-compliance",
  },
  {
    id: "as-faq-1",
    question: "What is included in Additional Solutions?",
    answer:
      "Additional Solutions includes ERP Odoo & Automation, POS and EIMS, and Digital Invoicing support.",
    category: "additional-solutions",
  },
  {
    id: "as-faq-2",
    question: "Can these solutions work alongside accounting and ERP support?",
    answer:
      "Yes. These solutions are designed to complement wider accounting, ERP, and compliance needs.",
    category: "additional-solutions",
  },
  {
    id: "as-faq-3",
    question: "Do you provide support after setup?",
    answer:
      "Yes. We can support rollout, coordination, and practical use after implementation.",
    category: "additional-solutions",
  },
];

export function getFaqsByIds(ids: string[]): FAQ[] {
  return ids
    .map((id) => faqs.find((faq) => faq.id === id))
    .filter((faq): faq is FAQ => Boolean(faq));
}
