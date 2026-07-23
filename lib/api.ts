export type ApiFetchOptions = Omit<RequestInit, "headers"> & {
  headers?: HeadersInit;
};

/**
 * Typed fetch helper for future API integrations.
 * Phase 1 keeps this ready without wiring live forms.
 */
export async function apiFetch<TResponse = unknown>(
  path: string,
  options: ApiFetchOptions = {},
): Promise<TResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const url = path.startsWith("http") ? path : `${baseUrl}${path}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = (await response.json().catch(() => ({}))) as {
    message?: string;
  } & TResponse;

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
