"use server";

import { User } from "@prisma/client";
import { hash, compare } from "bcrypt";
import { compileActivationTemplate, compileResetPassTemplate, sendMail } from "../mail";
import { signJwt, verifyJwt } from "../jwt";
import { prisma } from "@/lib/prisma";

export async function registerUser(user: Omit<User, "id" | "emailVerified" | "image">) {
  const result = await prisma.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      password: await hash(user.password, 10)
    }
  });

  const jwtUserId = signJwt({
    id: result.id
  });
  const activationUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;
  const body = compileActivationTemplate(user.firstName, activationUrl);
  await sendMail({ to: user.email, subject: "Aktivera ditt konto!", body });
  return result;
}

type ActivateUserFunc = (jwtUserId: string) => Promise<"userNotExist" | "alreadyActivated" | "success">;

export const activateUser: ActivateUserFunc = async (jwtUserID) => {
  const payload = verifyJwt(jwtUserID);
  const userId = payload?.id;
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) return "userNotExist";
  if (user.emailVerified) return "alreadyActivated";
  const result = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      emailVerified: new Date()
    }
  });
  return "success";
};

export async function forgotPassword(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  if (!user) throw new Error("Användaren existerar inte!");

  //  Send Email with Password Reset Link
  const jwtUserId = signJwt({
    id: user.id
  });
  const resetPassUrl = `${process.env.NEXTAUTH_URL}/auth/resetPass/${jwtUserId}`;
  const body = compileResetPassTemplate(user.firstName, resetPassUrl);
  const sendResult = await sendMail({
    to: user.email,
    subject: "Återställ lösenord",
    body: body
  });
  return sendResult;
}

type ResetPasswordFucn = (jwtUserId: string, password: string) => Promise<"userNotExist" | "success">;

export const resetPassword: ResetPasswordFucn = async (jwtUserId, password) => {
  const payload = verifyJwt(jwtUserId);
  if (!payload) return "userNotExist";
  const userId = payload.id;
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) return "userNotExist";

  const result = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      password: await hash(password, 10)
    }
  });
  if (result) return "success";
  else throw new Error("Någonting gick fel!");
};
