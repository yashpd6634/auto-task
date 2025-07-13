import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APIKEY);

export async function sendEmail(
  to: string,
  body: string,
  subject: string = "New Notification from AutoTask"
) {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [to],
    subject: subject,
    html: body,
  });

  if (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email");
  }

  return data;
}
