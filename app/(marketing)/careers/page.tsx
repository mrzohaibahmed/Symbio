import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { PageHero, CTASection, FAQAccordion } from "@/components/sections/shared";
import { JobCard, HiringProcessSection } from "@/components/careers";
import {
  careersBenefits,
  careersCulture,
  careersFaqs,
  careersHero,
  careersWhyJoin,
  getOpenJobs,
} from "@/data";
import { featureIconMap } from "@/lib/icons";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const title = "Careers";
const description =
  "Join Symbio Advisory. Explore open roles across advisory, tax, accounting, compliance, and technology.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Symbio Advisory careers",
    "business advisor jobs",
    "tax consultant careers",
    "accounting jobs Austin",
  ],
  alternates: { canonical: "/careers" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/careers`,
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

function CareersJsonLd() {
  const openJobs = getOpenJobs();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${title} | ${companyInfo.name}`,
        url: `${siteConfig.url}/careers`,
        description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Careers",
            item: `${siteConfig.url}/careers`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: openJobs.map((job, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: job.title,
          url: `${siteConfig.url}${job.href}`,
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

export default function CareersPage() {
  const openJobs = getOpenJobs();

  return (
    <>
      <CareersJsonLd />
      <PageHero
        eyebrow="Careers"
        title={careersHero.title}
        description={careersHero.description}
        image={careersHero.image}
        imageAlt={careersHero.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      <Section aria-labelledby="why-join-heading" muted className="border-y border-border/40">
        <FadeUp>
          <SectionHeading
            id="why-join-heading"
            eyebrow="Why Join Symbio"
            title="A place to grow with purpose"
            description="We hire people who care about clarity, craftsmanship, and client outcomes."
            align="center"
          />
        </FadeUp>
        <StaggerContainer className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {careersWhyJoin.map((item, index) => {
            const Icon = featureIconMap[item.icon];
            const formattedNumber = String(index + 1).padStart(2, "0");

            return (
              <StaggerItem key={item.id}>
                <div className="group relative flex h-full flex-col justify-between border-t border-border/60 pt-8 pb-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px]">
                  {/* Subtle top accent line that expands on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-[1px] left-0 h-[2px] w-0 bg-accent transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                  />

                  <div>
                    {/* Editorial Header: Number & Complementary Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="editorial-number font-mono text-3xl font-medium tracking-tight text-muted-foreground/35 transition-colors duration-300 group-hover:text-accent/80">
                        {formattedNumber}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8 text-accent border border-accent/15 transition-colors duration-300 group-hover:bg-accent/15 group-hover:border-accent/30 group-hover:text-accent-light">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="heading-font text-xl font-bold tracking-tight text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-accent-light">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-prose">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section aria-labelledby="culture-heading" muted>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <SectionHeading
              id="culture-heading"
              eyebrow={careersCulture.eyebrow}
              title={careersCulture.title}
              description={careersCulture.description}
              className="mb-0"
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {careersCulture.points.map((point) => (
                <li
                  key={point}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </Section>

      <Section aria-labelledby="benefits-heading">
        <FadeUp>
          <SectionHeading
            id="benefits-heading"
            eyebrow="Benefits"
            title="What we offer"
            description="Support that helps you do your best work and build a lasting career."
            align="center"
          />
        </FadeUp>
        <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {careersBenefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground shadow-sm"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="open-roles-heading" muted>
        <FadeUp>
          <SectionHeading
            id="open-roles-heading"
            eyebrow="Open Positions"
            title="Current openings"
            description="Find a role that matches your experience and ambition."
            align="center"
          />
        </FadeUp>
        {openJobs.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
            No open roles right now. Check back soon or send a general inquiry via Contact.
          </p>
        ) : (
          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {openJobs.map((job) => (
              <StaggerItem key={job.id}>
                <JobCard job={job} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </Section>

      <HiringProcessSection />

      <Section aria-labelledby="careers-faq-heading" muted>
        <FadeUp>
          <SectionHeading
            id="careers-faq-heading"
            eyebrow="FAQ"
            title="Frequently asked questions"
            align="center"
          />
        </FadeUp>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={careersFaqs} />
        </div>
      </Section>

      <CTASection
        title="Don’t see the right role?"
        description="Tell us about your background — we’re always interested in exceptional people."
        primaryLabel="Contact Talent Team"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
