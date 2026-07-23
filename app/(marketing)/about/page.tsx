import type { Metadata } from "next";
import {
  AboutStorySection,
  AboutJourneySection,
  AboutWhyChooseSection,
  AboutTeamSection,
  AboutCertificationsSection,
  AboutStatisticsSection,
  AboutOfficesSection,
} from "@/components/sections/about";
import { PageHero, CTASection } from "@/components/sections/shared";
import { aboutHero } from "@/data";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const title = "About Us";
const description =
  "Learn who Symbio Advisory is, what we stand for, and how we help businesses with clarity, structure, confidence, and growth.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about Symbio Advisory",
    "business advisory firm",
    "accounting advisors",
    "tax and compliance advisory",
    "corporate advisory firm",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/about`,
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

function AboutJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteConfig.url}/about#webpage`,
        url: `${siteConfig.url}/about`,
        name: `${title} | ${companyInfo.name}`,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
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
            name: "About",
            item: `${siteConfig.url}/about`,
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: companyInfo.name,
        url: siteConfig.url,
        description: companyInfo.description,
        email: companyInfo.email,
        telephone: companyInfo.phone,
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

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      <PageHero
        eyebrow="About"
        title={aboutHero.title}
        description={aboutHero.description}
        image={aboutHero.image}
        imageAlt={aboutHero.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutStorySection />
      <AboutJourneySection />
      <AboutWhyChooseSection />
      <AboutTeamSection />
      <AboutCertificationsSection />
      <AboutStatisticsSection />
      <AboutOfficesSection />
      <CTASection
        title="Your Strategic Business Advisory Partner"
        description="Connect with Symbio Advisory for practical advice, reliable systems, and growth-focused solutions."
      />
    </>
  );
}
