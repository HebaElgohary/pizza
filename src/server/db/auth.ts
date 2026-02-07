import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { Environments, Languages, Pages, Routes } from "@/constants/enums";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/prisma";
import { login } from "./_actions/auth";
import { LanguageType, Locale } from "@/i18n.config";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, //7 days
    updateAge: 24 * 60 * 60, //24 days
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === Environments.DEV,

  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",

        },
        password: { label: "Password", type: "password" },
         locale: { label: "Locale", type: "text" },
      },

      async authorize(credentials) {
        const locale:LanguageType = credentials?.locale as Locale ?? Languages.ENGLISH;
        console.log("looooooooooooooooocale", locale);
        const res = await login(credentials, locale);
        if (res.status === 200 && res.user) {
          return res.user;
        } else {
          throw new Error(
            JSON.stringify({
              validationError: res.error,
              responseError: res.message,
            })
          );
        }
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  pages: {
    signIn: `${Routes.AUTH}/${Pages.LOGIN}`,
  },
 
};
