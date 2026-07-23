"use client";

import { Toaster } from "sonner";

/**
 * Global toast host for newsletter and lightweight form feedback.
 */
export function AppToaster() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        className: "font-sans",
      }}
    />
  );
}
