import React,{ ReactNode } from 'react'
import Header from '@/components/header'
import { AuthNavBar } from '@/app/[locale]/auth/AuthNavBar'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/db/auth'
import Footer from '../footer'
export default async function AuthLayout({children}:{children:ReactNode}) {
 const locale= await getCurrentLocale()
 const {nav}= await getDictionary(locale)
   const initialSession = await getServerSession(authOptions);
 
    return (
    <div>
    <Header >
         <div className="flex min-w-0 flex-1 justify-end">
           
            <AuthNavBar
              locale={locale}
              nav={nav}
            //   className={className}
              initialSession={initialSession}
            />
        </div> 

    </Header>
    {children}
    <Footer/>
    </div>
  )
}
