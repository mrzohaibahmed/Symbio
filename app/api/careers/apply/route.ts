import { NextResponse } from "next/server";
import { applicationRepository } from "@/repositories";
import { fileStorage } from "@/lib/upload";
import { getAdminEmail, sendEmail } from "@/lib/mailer";
import {
  careerAdminEmail,
  careerConfirmationEmail,
} from "@/emails/templates";
import {
  careerApplicationSchema,
  ACCEPTED_RESUME_TYPES,
  MAX_RESUME_SIZE_BYTES,
} from "@/validation";
import { getJobBySlug } from "@/data";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      linkedin: String(formData.get("linkedin") || ""),
      portfolio: String(formData.get("portfolio") || ""),
      experience: String(formData.get("experience") || ""),
      coverLetter: String(formData.get("coverLetter") || ""),
      expectedSalary: String(formData.get("expectedSalary") || ""),
      availability: String(formData.get("availability") || ""),
      jobSlug: String(formData.get("jobSlug") || ""),
      jobTitle: String(formData.get("jobTitle") || ""),
    };

    const parsed = careerApplicationSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const job = getJobBySlug(parsed.data.jobSlug);
    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    const resume = formData.get("resume");
    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { message: "Resume upload is required" },
        { status: 400 },
      );
    }

    if (
      !ACCEPTED_RESUME_TYPES.includes(
        resume.type as (typeof ACCEPTED_RESUME_TYPES)[number],
      )
    ) {
      return NextResponse.json(
        { message: "Resume must be a PDF or Word document" },
        { status: 400 },
      );
    }

    if (resume.size > MAX_RESUME_SIZE_BYTES) {
      return NextResponse.json(
        { message: "Resume must be 5MB or smaller" },
        { status: 400 },
      );
    }

    const stored = await fileStorage.saveResume(
      resume,
      resume.name,
      resume.type,
    );

    const record = await applicationRepository.create({
      ...parsed.data,
      linkedin: parsed.data.linkedin || undefined,
      portfolio: parsed.data.portfolio || undefined,
      expectedSalary: parsed.data.expectedSalary || undefined,
      resumeFileName: stored.fileName,
      resumePath: stored.path,
    });

    const confirmation = careerConfirmationEmail(
      parsed.data.fullName,
      job.title,
    );
    const admin = careerAdminEmail({
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      jobTitle: job.title,
      experience: parsed.data.experience,
      linkedin: parsed.data.linkedin || undefined,
      portfolio: parsed.data.portfolio || undefined,
      expectedSalary: parsed.data.expectedSalary || undefined,
      availability: parsed.data.availability,
      resumeFileName: stored.fileName,
    });

    await Promise.all([
      sendEmail({
        to: parsed.data.email,
        subject: confirmation.subject,
        html: confirmation.html,
      }),
      sendEmail({
        to: getAdminEmail(),
        subject: admin.subject,
        html: admin.html,
        replyTo: parsed.data.email,
      }),
    ]);

    return NextResponse.json(
      { message: "Application submitted successfully", id: record.id },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
