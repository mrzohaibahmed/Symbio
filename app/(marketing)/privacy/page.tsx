import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Symbio Advisory.",
};

export default function PrivacyPage() {
  return (
    <PageHeader
      eyebrow="Legal"
      title="Privacy Policy"
      description="Privacy policy content will be published in a later phase."
    />
  );
}
