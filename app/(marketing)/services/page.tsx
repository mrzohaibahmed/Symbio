import type { Metadata } from "next";
import { PageHero, CTASection } from "@/components/sections/shared";
import {
  ServicesCatalogSection,
  servicesPageContent,
} from "@/components/sections/services/page";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";
import { services } from "@/data";

const title = "Services";
const description =
  "Explore Symbio Advisory services across accounting, tax, audit, corporate advisory, ERP implementation, automation, and digital solutions.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "business advisory services",
    "accounting services",
    "tax advisory",
    "ERP solutions",
    "compliance services",
    "digital invoicing",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/services`,
    title: `${title} | ${companyInfo.name}`,
    description,
    siteName: companyInfo.name,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${companyInfo.name}`,
    description,
  },
};

function ServicesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/services#webpage`,
        url: `${siteConfig.url}/services`,
        name: `${title} | ${companyInfo.name}`,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteConfig.url}/services`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `${siteConfig.url}${service.href}`,
        })),
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

export default function ServicesPage() {
  return (
    <>
      <ServicesJsonLd />
      <PageHero
        eyebrow="Services"
        title={servicesPageContent.hero.title}
        description={servicesPageContent.hero.description}
        image={servicesPageContent.hero.image}
        imageAlt={servicesPageContent.hero.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesCatalogSection />
      <CTASection
        title="Your Strategic Business Advisory Partner"
        description="Tell us what your business needs and we’ll help you identify the right advisory and systems support."
      />
    </>
  );
}
