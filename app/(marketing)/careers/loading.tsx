/**
 * Loading UI for careers routes.
 */
export default function CareersLoading() {
  return (
    <div
      className="container-shell pt-[calc(var(--header-height)+2rem)] pb-20"
      role="status"
      aria-label="Loading careers"
    >
      <div className="animate-pulse space-y-8">
        <div className="h-12 w-2/3 max-w-xl rounded bg-muted" />
        <div className="h-4 w-full max-w-lg rounded bg-muted" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-64 rounded-xl bg-muted" />
          ))}
        </div>
      </div>
    </div>
  );
}
