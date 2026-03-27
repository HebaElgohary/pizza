import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { Environments, Languages, Pages, Routes } from "@/constants/enums";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/prisma";
import { login } from "./_actions/auth";
import { LanguageType, Locale } from "@/i18n.config";
import { User, UserRole } from "@prisma/client";
import { DefaultSession, DefaultUser,Session } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: UserRole;
        city?: string| null ,
        id: string
      name: string,
      email: string
      image?: string | null
        country?: string | null
        phone?: string| null
        postalCode?: string| null
        streetAddress?: string | null,
    
  }
  interface Session extends DefaultSession {
    user: User;
  }

}
declare module "next-auth/jwt" {

  interface JWT extends Partial<User> 
  {
        role?: UserRole;
        city?: string| null ,
        id: string
        name: string,
        email: string
        image?: string | null
        country?: string | null
        phone?: string| null
        postalCode?: string| null
        streetAddress?: string | null,
   
  }
}

export const authOptions: NextAuthOptions = {
  callbacks:{
    jwt:async({token,user})=>{
if (user){
        token.id= user.id,
        token.name= user.name,
        token.email= user.email,
        token.role=user.role,
        token.image=user.image,
        token.city= user.city,
        token.country= user.country,
        token.phone= user.phone,
        token.postalCode= user.postalCode,
        token.streetAddress= user.streetAddress
}
      console.log('tokeeeeeeeeeeeeen',token);

      return token;
  },
  session: async ({ session, token }): Promise<Session> => {
    if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image ;
        session.user.country = token.country ;
        session.user.city = token.city ;
        session.user.postalCode = token.postalCode ;
        session.user.streetAddress = token.streetAddress as string; ;
        session.user.phone = token.phone ;
    }
    return session;
  },


},
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, //7 days //دا اقصى مدة للجلسة قبل ما يطلب من المستخدم تسجيل الدخول تاني
    updateAge: 24 * 60 * 60, //24 daysدا الوقت اللي بعده يتم تحديث المعلومات والبايانات عنده  session token بتاع المستخدم في كل مرة يتفاعل فيها مع التطبيق
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