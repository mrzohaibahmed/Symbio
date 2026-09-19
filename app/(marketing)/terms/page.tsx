import type { Metadata } from "next";
import { Section } from "@/components/layout";
import { PageHero } from "@/components/sections/shared";
import { companyInfo } from "@/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Symbio Advisory.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using the ${companyInfo.name} website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this site.`,
  },
  {
    title: "Use of the Website",
    body: "This website and its content are provided for general informational purposes about our advisory services. You agree not to misuse the site, attempt to gain unauthorized access to our systems, or use the site for any unlawful purpose.",
  },
  {
    title: "No Professional Advice",
    body: "Content on this website is provided for general information only and does not constitute financial, tax, legal, or professional advice. You should seek advice specific to your circumstances before acting on any information found here.",
  },
  {
    title: "Intellectual Property",
    body: `All content on this site, including text, graphics, logos, and images, is the property of ${companyInfo.legalName} or its licensors and may not be reproduced without prior written permission.`,
  },
  {
    title: "Limitation of Liability",
    body: `${companyInfo.legalName} is not liable for any damages arising from the use of, or inability to use, this website or its content.`,
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms of Use from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "Contact Us",
    body: `If you have questions about these Terms of Use, please contact us at ${companyInfo.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms and conditions that govern your use of this website."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <Section aria-labelledby="terms-heading">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().getFullYear()}
          </p>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-accent">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
