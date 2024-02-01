import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/signin"
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Användarnamn",
          type: "text",
          placeholder: "Ditt användarnamn"
        },
        password: {
          label: "Lösenord",
          type: "password"
        }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username
          }
        });
        if (!user) throw new Error("Användarnamn eller Lösenord är ej korrekt!");

        /* This is Naive Way of Comparing The Password */
        /* const isPasswordCorrect = credentials?.password === user.password; */
        if (!credentials?.password) throw new Error("Fyll i ditt lösenord");
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) throw new Error("Användarnamn eller Lösenord är ej korrekt!");

        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User;
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
