import Credentials from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'
import { Environments, Pages, Routes } from '@/constants/enums'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { db } from '@/lib/prisma'
export const authOptions: NextAuthOptions = {
  session:{
    strategy:'jwt',
    maxAge:7*24*60*60,    //7 days
    updateAge:24*60*60   //24 days
  },
  secret:process.env.AUTH_SECRET,
  debug:process.env.NODE_ENV===Environments.DEV,

  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'hello@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
     const user=credentials
     return {
        id:crypto.randomUUID(),
        ...user
     }
      },
    }),
  ],
  adapter:PrismaAdapter(db),
  pages:{
    'signIn': `${Routes.AUTH}/${Pages.LOGIN}`
  },

}