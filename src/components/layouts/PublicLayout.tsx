import React,{ ReactNode } from 'react'
import Header from '@/components/header'
import { AuthNavBar } from '@/app/[locale]/auth/AuthNavBar'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/db/auth'
import Footer from '../footer'
import { NavBar } from '../header/NavBar'
import { PrefetchOnHoverLink } from '../Link'
import Image from 'next/image'
import { Routes } from '@/constants/enums'
export default async function PublicLayout({children}:{children:ReactNode}) {
 const locale= await getCurrentLocale()
 const {nav}= await getDictionary(locale)
   const initialSession = await getServerSession(authOptions);
 
    return (
    <div>
    <Header >
         <header className="flex min-w-0 flex-1 justify-end">
             <PrefetchOnHoverLink
                     href={Routes.ROOT}
                     className="shrink-0"
                   >
                     <div className="flex items-center">
                       <Image
                         src="/images/pizzeria logo.jpg"
                         width={100}
                         height={55}
                         alt="Pizza Nova logo"
                         priority
                         className="h-auto w-[75px] object-contain sm:w-[90px] lg:w-[100px]"
                       />
           
                       <p
                         className="!ml-2 hidden text-lg font-bold text-primary sm:block sm:text-xl lg:!ml-3 lg:text-2xl"
                         style={{ fontFamily: "cursive" }}
                       >
                         {nav.logo}
                       </p>
                     </div>
                   </PrefetchOnHoverLink>
                            <div className="flex min-w-0 flex-1 justify-end">

            <NavBar
              locale={locale}
              nav={nav}
            //   className={className}
              initialSession={initialSession}
            />
            </div>
        </header> 

    </Header>
    {children}
    <Footer/>
    </div>
  )
}
