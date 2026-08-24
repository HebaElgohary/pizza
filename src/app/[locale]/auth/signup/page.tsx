import React from "react";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import Header from '@/components/header';
import RegisterForm from "./RegisterForm";

export default async function signup( ){
  const locale = await getCurrentLocale()
  const { register } = await getDictionary(locale);
  return (
    <main className="bg-gradient-to-br from-primary/19 to-[#e2e2e2] w-full !min-h-screen flex-col !py-3   ">
       <Header />
      <div className="!w-11/12 !h-fit sm:!w-2/3 md:!w-1/2 lg:!w-1/3 bg-white rounded-2xl shadow-xl !p-6 !mt-3 !mx-auto">
        <div className="text-center font-bold text-3xl !mb-6">
          {register.title}
        </div>
    <RegisterForm register={register} locale={locale}   />
      </div>
    </main>
  );
}
