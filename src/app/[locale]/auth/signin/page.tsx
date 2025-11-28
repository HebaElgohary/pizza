import { Button } from "@/components/ui/button";
import { Languages, Pages, Routes } from "@/constants/enums";
import Link from "next/link";
import Form from "@/components/form-fields/Form";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import Header from '@/components/header';

export default async function SigninPage() {
  const locale = await getCurrentLocale()
 const {login}=await getDictionary(locale)

  return (
    <main className="bg-gradient-to-br from-primary/19 to-[#e2e2e2] w-full !min-h-screen flex-col   ">
        <Header   />
      <div className="!w-11/12 sm:!w-2/3 md:!w-1/2 lg:!w-1/3 bg-white rounded-2xl shadow-xl !p-6 !my-22 h-fit !mx-auto">
        <div className="text-center font-bold text-3xl !mb-6">{login.title}</div>

        <form className="flex flex-col gap-4">
          <Form slug={Pages.LOGIN} translation={Languages.ENGLISH}
           dictionary={login.data}
           />
          <p className="text-sm">
            {login.p}{" "}
            <Link
              href={`/${locale}/${Routes.AUTH}/${Pages.Register}`}
              className="text-primary font-semibold hover:underline"
            >
          {login.span}
            </Link>
          </p>

          <Button className="!p-3 rounded-lg text-lg font-semibold">
            {login.btn}
          </Button>
        </form>
      </div>
    </main>
  );
}
