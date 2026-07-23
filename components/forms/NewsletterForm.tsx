"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FormInput } from "@/components/forms/fields";
import { LoadingButton } from "@/components/forms/LoadingButton";
import {
  newsletterFormSchema,
  type NewsletterFormValues,
} from "@/validation";
import { cn } from "@/utils";

export interface NewsletterFormProps {
  className?: string;
  compact?: boolean;
}

export function NewsletterForm({ className, compact = false }: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { email: "", website: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        toast.error(payload.message || "Unable to subscribe right now.");
        return;
      }

      reset();
      toast.success(payload.message || "You're subscribed. Welcome aboard!");
    } catch {
      toast.error("Network error. Please try again.");
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        compact
          ? "flex w-full flex-col gap-3 sm:flex-row sm:items-start"
          : "space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm",
        className,
      )}
      noValidate
    >
      <div className={cn(compact ? "min-w-0 flex-1" : "")}>
        <FormInput
          label={compact ? "Email address" : "Work email"}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <LoadingButton
        type="submit"
        loading={isSubmitting}
        loadingText="Subscribing..."
        className={cn(compact && "mt-0 sm:mt-6")}
      >
        Subscribe
      </LoadingButton>
    </form>
  );
}
