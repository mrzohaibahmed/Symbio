import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#111111] font-sans text-white antialiased">
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <p className="text-8xl font-extrabold text-[#E30613] md:text-9xl">404</p>
            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-md text-lg text-white/50">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#E30613] px-7 text-sm font-semibold text-white transition-all hover:bg-[#B3000F]"
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
