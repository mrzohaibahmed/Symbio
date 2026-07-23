import { NextResponse } from "next/server";
import { contactRepository } from "@/repositories";
import { getAdminEmail, sendEmail } from "@/lib/mailer";
import {
  contactAdminEmail,
  contactConfirmationEmail,
  consultationAdminEmail,
} from "@/emails/templates";
import { contactFormSchema, consultationFormSchema } from "@/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (body.type === "consultation") {
      const parsed = consultationFormSchema.safeParse(body.consultation ?? body);
      if (!parsed.success) {
        return NextResponse.json(
          {
            message: "Validation failed",
            errors: parsed.error.flatten().fieldErrors,
          },
          { status: 400 },
        );
      }

      const data = parsed.data;
      if (data.website) {
        return NextResponse.json({ message: "Rejected" }, { status: 400 });
      }

      await contactRepository.create({
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        serviceInterest: data.interestedService,
        subject: `Consultation — ${data.company}`,
        message: data.message,
      });

      const admin = consultationAdminEmail(data);
      const confirmation = contactConfirmationEmail(data.name);

      await Promise.all([
        sendEmail({
          to: getAdminEmail(),
          subject: admin.subject,
          html: admin.html,
          replyTo: data.email,
        }),
        sendEmail({
          to: data.email,
          subject: confirmation.subject,
          html: confirmation.html,
        }),
      ]);

      return NextResponse.json(
        { message: "Consultation request received" },
        { status: 201 },
      );
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = parsed.data;
    if (data.website) {
      return NextResponse.json({ message: "Rejected" }, { status: 400 });
    }

    await contactRepository.create(data);

    const admin = contactAdminEmail({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      serviceInterest: data.serviceInterest,
      subject: data.subject,
      message: data.message,
    });
    const confirmation = contactConfirmationEmail(data.name);

    await Promise.all([
      sendEmail({
        to: getAdminEmail(),
        subject: admin.subject,
        html: admin.html,
        replyTo: data.email,
      }),
      sendEmail({
        to: data.email,
        subject: confirmation.subject,
        html: confirmation.html,
      }),
    ]);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
