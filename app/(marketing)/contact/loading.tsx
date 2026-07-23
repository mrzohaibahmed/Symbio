/**
 * Loading UI for contact page.
 */
export default function ContactLoading() {
  return (
    <div
      className="container-shell pt-[calc(var(--header-height)+2rem)] pb-20"
      role="status"
      aria-label="Loading contact page"
    >
      <div className="animate-pulse space-y-8">
        <div className="h-12 w-1/2 rounded bg-muted" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-40 rounded-xl bg-muted" />
          ))}
        </div>
        <div className="h-80 rounded-2xl bg-muted" />
      </div>
    </div>
  );
}
