import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contact";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid contact payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "SP Digital <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        message:
          "Preview mode: configure RESEND_API_KEY and CONTACT_TO_EMAIL to send messages."
      },
      { status: 202 }
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, intent, budget, message } = parsed.data;

  await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `SP Digital inquiry: ${intent} from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Intent: ${intent}`,
      `Budget or timeline: ${budget || "Not provided"}`,
      "",
      message
    ].join("\n")
  });

  return NextResponse.json({ message: "Message sent" });
}
