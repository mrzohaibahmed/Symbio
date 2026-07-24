import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { CTASection, FAQAccordion } from "@/components/sections/shared";
import { AboutOfficesSection } from "@/components/sections/about";
import {
  ContactInteractiveSection,
} from "@/components/contact";

import {
  contactFaqs,
  offices,
} from "@/data";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const title = "Contact Us";
const description =
  "Whether you need accounting, tax advisory, audit, ERP implementation, compliance, or strategic business consulting, Symbio Advisory specialists are ready to help.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "contact Symbio Advisory",
    "schedule consultation",
    "business advisory contact",
    "tax and compliance contact",
    "finance advisory Pakistan",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact`,
    title: `${title} | ${companyInfo.name}`,
    description,
    siteName: companyInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${companyInfo.name}`,
    description,
  },
};

function ContactJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: `${title} | ${companyInfo.name}`,
        url: `${siteConfig.url}/contact`,
        description,
      },
      {
        "@type": "LocalBusiness",
        name: companyInfo.name,
        email: companyInfo.email,
        telephone: companyInfo.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: companyInfo.address.line1,
          addressLocality: companyInfo.address.city,
          addressRegion: companyInfo.address.state,
          postalCode: companyInfo.address.postalCode,
          addressCountry: companyInfo.address.country,
        },
        url: siteConfig.url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: `${siteConfig.url}/contact`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactJsonLd />
      
      {/* Editorial Hero, 40/60 Split, Stats, Timeline & Tabbed Single Form Container */}
      <ContactInteractiveSection />

      {/* Offices & Locations — Premium Enterprise Office Locator */}
      <AboutOfficesSection />

      {/* FAQ Accordion */}
      <Section aria-labelledby="contact-faq-heading">
        <FadeUp>
          <SectionHeading
            id="contact-faq-heading"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Clear answers about how we structure consultations, advisory engagements, and onboarding."
            align="center"
          />
        </FadeUp>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={contactFaqs} />
        </div>
      </Section>



      {/* CTA Section */}
      <CTASection
        title="Your Strategic Business Advisory Partner"
        description="Whether you need advice, compliance support, or systems guidance, Symbio Advisory is here to help."
      />
    </>
  );
}
