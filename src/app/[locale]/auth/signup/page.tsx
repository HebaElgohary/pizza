import { Button } from "@/components/ui/button";
import { Languages, Pages, Routes } from "@/constants/enums";
import Link from "next/link";
import React from "react";
import Form from "@/components/form-fields/Form";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import Header from '@/components/header';

export default async function signup( ){
  const locale = await getCurrentLocale()
  console.log("loooooooooooooooooooooooooocale issssssss");
  const { register } = await getDictionary(locale);
  return (
    <main className="bg-gradient-to-br from-primary/19 to-[#e2e2e2] w-full !min-h-screen flex-col   ">
       <Header />
      <div className="!w-11/12 !h-fit sm:!w-2/3 md:!w-1/2 lg:!w-1/3 bg-white rounded-2xl shadow-xl !p-6 !my-11 !mx-auto">
        <div className="text-center font-bold text-3xl !mb-6">
          {register.title}
        </div>
        <form className="flex flex-col gap-4">
          <Form
            slug={Pages.Register}
            translation={Languages.ENGLISH}
            dictionary={register.data}
          />
          <p>
            {register.p}{" "}
            <Link
              href={`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`}
              className="text-primary font-semibold"
            >
              {" "}
              {register.span}{" "}
            </Link>
          </p>
          <Button className="!p-2 ">
            {register.btn}
            </Button>
        </form>
      </div>
    </main>
  );
}
