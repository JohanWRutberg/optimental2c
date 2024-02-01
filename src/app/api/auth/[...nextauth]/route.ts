import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "User Name",
          type: "text",
          placeholder: "Your User Name"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username
          }
        });
        if (!user) throw new Error("User Name or Password is not correct");

        /* This is Naive Way of Comparing The Password */
        /* const isPasswordCorrect = credentials?.password === user.password; */
        if (!credentials?.password) throw new Error("Please Provide Your Password");
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) throw new Error("User or Password is Not Correct!");

        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      }
    })
  ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
