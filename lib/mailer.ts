import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    transporter = nodemailer.createTransport({
      jsonTransport: true,
    });
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return transporter;
}

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

/**
 * Sends email via SMTP when configured; otherwise uses JSON transport for local/dev.
 */
export async function sendEmail(input: SendEmailInput): Promise<void> {
  const from =
    process.env.SMTP_FROM ||
    process.env.SMTP_USER ||
    "Symbio Advisory <noreply@symbioadvisory.com>";

  await getTransporter().sendMail({
    from,
    to: input.to,
    subject: input.subject,
    html: input.html,
    text: input.text,
    replyTo: input.replyTo,
  });
}

export function getAdminEmail(): string {
  return process.env.ADMIN_EMAIL || "symbio@charteredaccountant.pk";
}
