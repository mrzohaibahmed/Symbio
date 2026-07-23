import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { PageHero, CTASection, FAQAccordion } from "@/components/sections/shared";
import {
  ContactCard,
  ContactLocationCard,
  MapSection,
  BusinessHours,
  ContactInfo,
} from "@/components/contact";
import {
  ContactForm,
  ConsultationForm,
  NewsletterForm,
} from "@/components/forms";
import {
  contactChannels,
  contactFaqs,
  contactHero,
  offices,
} from "@/data";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const title = "Contact";
const description =
  "Contact Symbio Advisory for finance, tax, compliance, systems, and strategic growth support.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "contact Symbio Advisory",
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
      <PageHero
        eyebrow="Contact"
        title={contactHero.title}
        description={contactHero.description}
        image={contactHero.image}
        imageAlt={contactHero.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Section aria-labelledby="contact-channels-heading">
        <FadeUp>
          <SectionHeading
            id="contact-channels-heading"
            eyebrow="Get in Touch"
            title="How to reach us"
            description="Choose the channel that works best for your business inquiry."
            align="center"
          />
        </FadeUp>
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {contactChannels.map((channel) => (
            <StaggerItem key={channel.id}>
              <ContactCard channel={channel} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section aria-labelledby="offices-heading" muted>
        <FadeUp>
          <SectionHeading
            id="offices-heading"
            eyebrow="Offices"
            title="Visit our locations"
            description="Connect with Symbio Advisory across Pakistan and the UK."
            align="center"
          />
        </FadeUp>
        <StaggerContainer className="grid gap-6 lg:grid-cols-2">
          {offices.map((office) => (
            <StaggerItem key={office.id}>
              <ContactLocationCard office={office} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-8">
          <MapSection />
        </div>
      </Section>

      <Section aria-labelledby="hours-info-heading">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeUp>
            <BusinessHours />
          </FadeUp>
          <FadeUp delay={0.08}>
            <ContactInfo />
          </FadeUp>
        </div>
      </Section>

      <Section aria-labelledby="contact-faq-heading" muted>
        <FadeUp>
          <SectionHeading
            id="contact-faq-heading"
            eyebrow="FAQ"
            title="Common questions"
            align="center"
          />
        </FadeUp>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={contactFaqs} />
        </div>
      </Section>

      <Section aria-labelledby="contact-form-heading">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeUp>
            <SectionHeading
              id="contact-form-heading"
              eyebrow="Contact Form"
              title="Send us a message"
              description="Share a few details and we’ll route your inquiry to the right specialist."
              className="mb-6"
            />
            <ContactForm />
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionHeading
              eyebrow="Consultation"
              title="Book a consultation"
              description="Prefer a structured conversation? Request a time that works for your team."
              className="mb-6"
            />
            <ConsultationForm />
          </FadeUp>
        </div>
      </Section>

      <Section aria-labelledby="newsletter-heading" muted>
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <SectionHeading
              id="newsletter-heading"
              eyebrow="Newsletter"
              title="Stay informed"
              description="Practical insights on advisory, tax, compliance, systems, and growth."
              align="center"
            />
            <NewsletterForm compact className="mx-auto max-w-xl text-left" />
          </FadeUp>
        </div>
      </Section>

      <CTASection
        title="Your Strategic Business Advisory Partner"
        description="Whether you need advice, compliance support, or systems guidance, Symbio Advisory is here to help."
      />
    </>
  );
}
