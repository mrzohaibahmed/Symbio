import { NextResponse } from "next/server";
import { newsletterRepository } from "@/repositories";
import { sendEmail } from "@/lib/mailer";
import { newsletterWelcomeEmail } from "@/emails/templates";
import { newsletterFormSchema } from "@/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Please enter a valid email address",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ message: "Rejected" }, { status: 400 });
    }

    const result = await newsletterRepository.subscribe(parsed.data);
    const welcome = newsletterWelcomeEmail(parsed.data.email);

    if (!result.alreadySubscribed) {
      await sendEmail({
        to: parsed.data.email,
        subject: welcome.subject,
        html: welcome.html,
      });
    }

    return NextResponse.json(
      {
        message: result.alreadySubscribed
          ? "You're already subscribed."
          : "You're subscribed. Welcome aboard!",
        id: result.id,
      },
      { status: result.alreadySubscribed ? 200 : 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
