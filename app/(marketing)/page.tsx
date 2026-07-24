import type { Metadata } from "next";
import {
  HeroSection,
  TrustedSection,
  ServicesSection,
  WhyChooseUsSection,
  IndustriesSection,
  ProcessSection,
  TestimonialsSection,
  CtaSection,
} from "@/components/sections";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const homeTitle = "Meet Symbio Advisory";
const homeDescription =
  "A modern advisory firm helping businesses manage finance, tax, compliance, systems, and strategic growth under one professional platform.";
const homeKeywords = [
  "accounting and bookkeeping",
  "tax advisory and compliance",
  "business and financial advisory",
  "corporate advisory and compliance",
  "ERP implementation and automation",
  "digital invoicing",
  "Symbio Advisory",
];

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: homeKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${homeTitle} | ${companyInfo.name}`,
    description: homeDescription,
    siteName: companyInfo.name,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${homeTitle} | ${companyInfo.name}`,
    description: homeDescription,
  },
};

function HomeJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: companyInfo.name,
        legalName: companyInfo.legalName,
        url: siteConfig.url,
        description: companyInfo.description,
        email: companyInfo.email,
        telephone: companyInfo.phone,
        foundingDate: String(companyInfo.foundedYear),
        address: {
          "@type": "PostalAddress",
          streetAddress: [companyInfo.address.line1, companyInfo.address.line2]
            .filter(Boolean)
            .join(", "),
          addressLocality: companyInfo.address.city,
          addressRegion: companyInfo.address.state,
          postalCode: companyInfo.address.postalCode,
          addressCountry: companyInfo.address.country,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: companyInfo.name,
        description: homeDescription,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: `${homeTitle} | ${companyInfo.name}`,
        description: homeDescription,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/**
 * Symbio Advisory homepage — composed from reusable section modules.
 */
export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HeroSection />
      <TrustedSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
