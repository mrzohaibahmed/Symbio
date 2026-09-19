import type { Metadata } from "next";
import { Section } from "@/components/layout";
import { PageHero } from "@/components/sections/shared";
import { companyInfo } from "@/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Symbio Advisory.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, and company details when you submit a contact form, book a consultation, apply for a role, or subscribe to our newsletter. We also collect limited technical information (such as browser type and pages visited) to help us improve the site.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to respond to enquiries, schedule consultations, process job applications, send requested updates, and improve our services. We do not sell your personal information to third parties.",
  },
  {
    title: "Information Sharing",
    body: "We do not share your personal information with third parties except where necessary to provide our services (for example, email delivery), to comply with the law, or to protect our rights.",
  },
  {
    title: "Data Retention & Security",
    body: "We retain personal information only as long as necessary for the purposes described in this policy and take reasonable technical and organizational measures to protect it against unauthorized access, alteration, or disclosure.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.",
  },
  {
    title: "Contact Us",
    body: `If you have questions about this Privacy Policy, please contact us at ${companyInfo.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Symbio Advisory collects, uses, and protects your information."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <Section aria-labelledby="privacy-heading">
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
