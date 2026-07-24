"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/components/forms/fields";
import { LoadingButton } from "@/components/forms/LoadingButton";
import { SuccessDialog, ErrorDialog } from "@/components/forms/StatusDialog";
import { services } from "@/data";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/validation";

export function ContactForm() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong. Please try again.",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      serviceInterest: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        setErrorMessage(payload.message || "Unable to send your message.");
        setErrorOpen(true);
        return;
      }

      reset();
      setSuccessOpen(true);
    } catch {
      setErrorMessage("Network error. Please try again shortly.");
      setErrorOpen(true);
    }
  });

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="space-y-5"
        noValidate
      >
        <div className="grid gap-5 md:grid-cols-2">
          <FormInput
            label="Full Name"
            required
            autoComplete="name"
            error={errors.name?.message}
            {...register("name")}
          />
          <FormInput
            label="Company"
            autoComplete="organization"
            error={errors.company?.message}
            {...register("company")}
          />
          <FormInput
            label="Email"
            type="email"
            required
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <FormInput
            label="Phone"
            type="tel"
            autoComplete="tel"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>

        <FormSelect
          label="Service Interested In"
          required
          error={errors.serviceInterest?.message}
          options={services.map((service) => ({
            value: service.title,
            label: service.title,
          }))}
          {...register("serviceInterest")}
        />

        <FormInput
          label="Subject"
          required
          error={errors.subject?.message}
          {...register("subject")}
        />

        <FormTextarea
          label="Message"
          required
          rows={5}
          error={errors.message?.message}
          {...register("message")}
        />

        {/* Spam protection honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <LoadingButton type="submit" loading={isSubmitting} className="w-full sm:w-auto">
          Send Message
        </LoadingButton>
      </form>

      <SuccessDialog
        open={successOpen}
        onOpenChange={setSuccessOpen}
        title="Message sent"
        description="Thank you for contacting Symbio Advisory. We’ll respond within one business day."
      />
      <ErrorDialog
        open={errorOpen}
        onOpenChange={setErrorOpen}
        title="Unable to send"
        description={errorMessage}
      />
    </>
  );
}

/** Kept for potential toast-based flows */
export function notifyContactSuccess() {
  toast.success("Message sent successfully.");
}
