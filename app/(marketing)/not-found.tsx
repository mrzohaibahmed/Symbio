import Link from "next/link";
import { SectionTransition } from "@/components/layout";

export default function MarketingNotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden gradient-navy-deep">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-grid" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container-shell relative text-center">
        <p className="heading-font text-8xl font-extrabold text-accent md:text-9xl">404</p>
        <h1 className="mt-4 heading-font text-3xl font-bold text-white md:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-white/50">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-white/20 px-7 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/40 hover:bg-white/5"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <SectionTransition />
    </section>
  );
}
