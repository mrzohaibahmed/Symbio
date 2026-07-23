"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/components/forms/fields";
import { LoadingButton } from "@/components/forms/LoadingButton";
import { SuccessDialog, ErrorDialog } from "@/components/forms/StatusDialog";
import {
  businessSizeOptions,
  industryOptions,
  preferredTimeOptions,
} from "@/data/contact";
import { services } from "@/data";
import {
  consultationFormSchema,
  type ConsultationFormValues,
} from "@/validation";

export function ConsultationForm() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Unable to submit your consultation request.",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      businessSize: "",
      industry: "",
      interestedService: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          serviceInterest: values.interestedService,
          subject: `Consultation request — ${values.company}`,
          message: [
            values.message,
            "",
            `Business size: ${values.businessSize}`,
            `Industry: ${values.industry}`,
            `Preferred date: ${values.preferredDate}`,
            `Preferred time: ${values.preferredTime}`,
          ].join("\n"),
          website: values.website,
          type: "consultation",
          consultation: values,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        setErrorMessage(payload.message || "Unable to submit request.");
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
        className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
        noValidate
      >
        <div className="grid gap-5 md:grid-cols-2">
          <FormInput
            label="Full Name"
            required
            error={errors.name?.message}
            {...register("name")}
          />
          <FormInput
            label="Company"
            required
            error={errors.company?.message}
            {...register("company")}
          />
          <FormInput
            label="Email"
            type="email"
            required
            error={errors.email?.message}
            {...register("email")}
          />
          <FormInput
            label="Phone"
            type="tel"
            required
            error={errors.phone?.message}
            {...register("phone")}
          />
          <FormSelect
            label="Business Size"
            required
            error={errors.businessSize?.message}
            options={businessSizeOptions.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
            {...register("businessSize")}
          />
          <FormSelect
            label="Industry"
            required
            error={errors.industry?.message}
            options={industryOptions.map((item) => ({
              value: item,
              label: item,
            }))}
            {...register("industry")}
          />
          <FormSelect
            label="Interested Service"
            required
            error={errors.interestedService?.message}
            options={services.map((service) => ({
              value: service.title,
              label: service.title,
            }))}
            {...register("interestedService")}
          />
          <FormInput
            label="Preferred Date"
            type="date"
            required
            error={errors.preferredDate?.message}
            {...register("preferredDate")}
          />
          <FormSelect
            label="Preferred Time"
            required
            error={errors.preferredTime?.message}
            options={preferredTimeOptions.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
            {...register("preferredTime")}
          />
        </div>

        <FormTextarea
          label="Message"
          required
          rows={4}
          error={errors.message?.message}
          {...register("message")}
        />

        <div className="hidden" aria-hidden="true">
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        <LoadingButton type="submit" loading={isSubmitting}>
          Request Consultation
        </LoadingButton>
      </form>

      <SuccessDialog
        open={successOpen}
        onOpenChange={setSuccessOpen}
        title="Consultation requested"
        description="Thanks — our team will confirm a time based on your preferences."
      />
      <ErrorDialog
        open={errorOpen}
        onOpenChange={setErrorOpen}
        title="Request failed"
        description={errorMessage}
      />
    </>
  );
}
