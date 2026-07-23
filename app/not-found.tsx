import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0B1F3A] font-sans text-white antialiased">
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <p className="text-8xl font-extrabold text-[#0F9D7A] md:text-9xl">404</p>
            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-md text-lg text-white/50">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0F9D7A] px-7 text-sm font-semibold text-white transition-all hover:bg-[#0A7D60]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
