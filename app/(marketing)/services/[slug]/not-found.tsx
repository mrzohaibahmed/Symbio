/**
 * Service detail not-found fallback when slug is invalid.
 */
import Link from "next/link";
import { Container } from "@/components/layout";
import { PrimaryButton, OutlineButton } from "@/components/ui";

export default function ServiceNotFound() {
  return (
    <section className="border-b border-border pt-[calc(var(--header-height)+3rem)] pb-24">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          404
        </p>
        <h1 className="heading-font mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Service not found
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          We couldn’t find that service. Browse the full catalog or contact our
          team for guidance.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton asChild size="lg">
            <Link href="/services">View All Services</Link>
          </PrimaryButton>
          <OutlineButton asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </OutlineButton>
        </div>
      </Container>
    </section>
  );
}
