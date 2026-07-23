"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormInput,
  FormSelect,
  FormTextarea,
  FormUpload,
} from "@/components/forms/fields";
import { LoadingButton } from "@/components/forms/LoadingButton";
import { SuccessDialog, ErrorDialog } from "@/components/forms/StatusDialog";
import { availabilityOptions, experienceOptions } from "@/data/contact";
import {
  careerApplicationSchema,
  ACCEPTED_RESUME_TYPES,
  MAX_RESUME_SIZE_BYTES,
  type CareerApplicationValues,
} from "@/validation";

export interface ApplicationFormProps {
  jobSlug: string;
  jobTitle: string;
}

export function ApplicationForm({ jobSlug, jobTitle }: ApplicationFormProps) {
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | undefined>();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Unable to submit your application.",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerApplicationValues>({
    resolver: zodResolver(careerApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      portfolio: "",
      experience: "",
      coverLetter: "",
      expectedSalary: "",
      availability: "",
      jobSlug,
      jobTitle,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    if (!resume) {
      setResumeError("Please upload your resume (PDF or Word).");
      return;
    }

    if (!ACCEPTED_RESUME_TYPES.includes(resume.type as (typeof ACCEPTED_RESUME_TYPES)[number])) {
      setResumeError("Resume must be a PDF or Word document.");
      return;
    }

    if (resume.size > MAX_RESUME_SIZE_BYTES) {
      setResumeError("Resume must be 5MB or smaller.");
      return;
    }

    setResumeError(undefined);

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value ?? "");
      });
      formData.append("resume", resume);

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        setErrorMessage(payload.message || "Unable to submit application.");
        setErrorOpen(true);
        return;
      }

      reset({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        experience: "",
        coverLetter: "",
        expectedSalary: "",
        availability: "",
        jobSlug,
        jobTitle,
      });
      setResume(null);
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
        <input type="hidden" {...register("jobSlug")} />
        <input type="hidden" {...register("jobTitle")} />

        <div className="grid gap-5 md:grid-cols-2">
          <FormInput
            label="Full Name"
            required
            error={errors.fullName?.message}
            {...register("fullName")}
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
          <FormInput
            label="LinkedIn"
            type="url"
            placeholder="https://linkedin.com/in/..."
            error={errors.linkedin?.message}
            {...register("linkedin")}
          />
          <FormInput
            label="Portfolio"
            type="url"
            placeholder="https://..."
            error={errors.portfolio?.message}
            {...register("portfolio")}
          />
          <FormSelect
            label="Experience"
            required
            error={errors.experience?.message}
            options={experienceOptions.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
            {...register("experience")}
          />
          <FormInput
            label="Expected Salary"
            placeholder="Optional"
            error={errors.expectedSalary?.message}
            {...register("expectedSalary")}
          />
          <FormSelect
            label="Availability"
            required
            error={errors.availability?.message}
            options={availabilityOptions.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
            {...register("availability")}
          />
        </div>

        <FormUpload
          label="Resume Upload"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          hint="PDF or Word, max 5MB"
          error={resumeError}
          fileName={resume?.name}
          onChange={(event) => {
            const file = event.target.files?.[0] ?? null;
            setResume(file);
            setResumeError(undefined);
          }}
        />

        <FormTextarea
          label="Cover Letter"
          required
          rows={6}
          error={errors.coverLetter?.message}
          {...register("coverLetter")}
        />

        <LoadingButton type="submit" loading={isSubmitting} loadingText="Submitting...">
          Submit Application
        </LoadingButton>
      </form>

      <SuccessDialog
        open={successOpen}
        onOpenChange={setSuccessOpen}
        title="Application submitted"
        description={`Thank you for applying to ${jobTitle}. We’ll review your materials and follow up soon.`}
      />
      <ErrorDialog
        open={errorOpen}
        onOpenChange={setErrorOpen}
        title="Submission failed"
        description={errorMessage}
      />
    </>
  );
}
