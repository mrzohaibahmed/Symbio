function layout(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:Inter,Arial,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F8FAFC;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#FFFFFF;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#E53935;padding:20px 28px;">
              <p style="margin:0;font-size:18px;font-weight:700;color:#FFFFFF;">Symbio Advisory</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 28px;color:#6B7280;font-size:12px;">
              © ${new Date().getFullYear()} Symbio Advisory. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function contactConfirmationEmail(name: string): { subject: string; html: string } {
  return {
    subject: "We received your message — Symbio Advisory",
    html: layout(
      "Message received",
      `<h1 style="margin:0 0 12px;font-size:22px;">Thank you, ${name}</h1>
       <p style="margin:0 0 12px;line-height:1.6;color:#6B7280;">We received your inquiry and will respond within one business day.</p>
       <p style="margin:0;line-height:1.6;color:#6B7280;">If your request is urgent, reply to this email or call our team.</p>`,
    ),
  };
}

export function contactAdminEmail(payload: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceInterest: string;
  subject: string;
  message: string;
}): { subject: string; html: string } {
  return {
    subject: `New contact inquiry: ${payload.subject}`,
    html: layout(
      "New contact inquiry",
      `<h1 style="margin:0 0 12px;font-size:22px;">New contact form submission</h1>
       <p><strong>Name:</strong> ${payload.name}</p>
       <p><strong>Email:</strong> ${payload.email}</p>
       <p><strong>Company:</strong> ${payload.company || "—"}</p>
       <p><strong>Phone:</strong> ${payload.phone || "—"}</p>
       <p><strong>Service:</strong> ${payload.serviceInterest}</p>
       <p><strong>Subject:</strong> ${payload.subject}</p>
       <p><strong>Message:</strong></p>
       <p style="white-space:pre-wrap;line-height:1.6;color:#6B7280;">${payload.message}</p>`,
    ),
  };
}

export function newsletterWelcomeEmail(email: string): { subject: string; html: string } {
  return {
    subject: "Welcome to Symbio Advisory insights",
    html: layout(
      "Newsletter welcome",
      `<h1 style="margin:0 0 12px;font-size:22px;">You're subscribed</h1>
       <p style="margin:0 0 12px;line-height:1.6;color:#6B7280;">Thanks for joining our newsletter (${email}). Expect practical insights on advisory, tax, and digital transformation.</p>`,
    ),
  };
}

export function careerConfirmationEmail(
  name: string,
  jobTitle: string,
): { subject: string; html: string } {
  return {
    subject: `Application received — ${jobTitle}`,
    html: layout(
      "Application received",
      `<h1 style="margin:0 0 12px;font-size:22px;">Thank you, ${name}</h1>
       <p style="margin:0 0 12px;line-height:1.6;color:#6B7280;">We received your application for <strong>${jobTitle}</strong>. Our talent team will review and follow up if there is a fit.</p>`,
    ),
  };
}

export function careerAdminEmail(payload: {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  experience: string;
  linkedin?: string;
  portfolio?: string;
  expectedSalary?: string;
  availability: string;
  resumeFileName?: string;
}): { subject: string; html: string } {
  return {
    subject: `New career application — ${payload.jobTitle}`,
    html: layout(
      "New career application",
      `<h1 style="margin:0 0 12px;font-size:22px;">New application</h1>
       <p><strong>Role:</strong> ${payload.jobTitle}</p>
       <p><strong>Name:</strong> ${payload.fullName}</p>
       <p><strong>Email:</strong> ${payload.email}</p>
       <p><strong>Phone:</strong> ${payload.phone}</p>
       <p><strong>Experience:</strong> ${payload.experience}</p>
       <p><strong>Availability:</strong> ${payload.availability}</p>
       <p><strong>Expected salary:</strong> ${payload.expectedSalary || "—"}</p>
       <p><strong>LinkedIn:</strong> ${payload.linkedin || "—"}</p>
       <p><strong>Portfolio:</strong> ${payload.portfolio || "—"}</p>
       <p><strong>Resume:</strong> ${payload.resumeFileName || "—"}</p>`,
    ),
  };
}

export function consultationAdminEmail(payload: {
  name: string;
  company: string;
  email: string;
  phone: string;
  businessSize: string;
  industry: string;
  interestedService: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}): { subject: string; html: string } {
  return {
    subject: `Consultation request — ${payload.company}`,
    html: layout(
      "Consultation request",
      `<h1 style="margin:0 0 12px;font-size:22px;">New consultation request</h1>
       <p><strong>Name:</strong> ${payload.name}</p>
       <p><strong>Company:</strong> ${payload.company}</p>
       <p><strong>Email:</strong> ${payload.email}</p>
       <p><strong>Phone:</strong> ${payload.phone}</p>
       <p><strong>Business size:</strong> ${payload.businessSize}</p>
       <p><strong>Industry:</strong> ${payload.industry}</p>
       <p><strong>Service:</strong> ${payload.interestedService}</p>
       <p><strong>Preferred:</strong> ${payload.preferredDate} at ${payload.preferredTime}</p>
       <p style="white-space:pre-wrap;line-height:1.6;color:#6B7280;">${payload.message}</p>`,
    ),
  };
}
