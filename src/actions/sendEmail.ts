"use server";
import { Resend } from "resend";

import { UserFormWithAddress } from "@/app/models/User";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: UserFormWithAddress) => {
  console.log(data, "Data sent");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "nordin.zerhouni@gmail.com",
    subject: "Message from contact form",
    text: `namn:${data.firstName} ${data.lastName} | "email":${data.email} | stad: ${data.city} | meddelande:${data.message}`,
  });
};
