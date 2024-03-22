import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth";
import { use } from "react";
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/signin"
  },
  session: {
    strategy: "jwt"
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      idToken: true,

      authorization: {
        params: {
          scope: "openid profile email"
        }
      }
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

        /* const isPasswordCorrect = credentials?.password === user.password; */
        if (!credentials?.password) throw new Error("Ange ditt lösenord");
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) throw new Error("Användarnamn eller Lösenord är ej korrekt!");

        if (!user.emailVerified) throw new Error("Vänligen verifiera din e-post adress först!");

        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.user = user as User;
      }
      return token;
    },

    async session({ token, session }) {
      console.log("session", { token, session });
      if (session?.user.firstName) session.user.role = token.role;
      if (token?.user?.firstName) session.user.firstName = token.user.firstName;
      if (token?.user?.lastName) session.user.lastName = token.user.lastName;
      if (token?.user?.role) session.user.role = token.user.role;
      if (token?.user?.journal) session.user.journal = token.user.journal;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
