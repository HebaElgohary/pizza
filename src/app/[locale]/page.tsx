// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { PrefetchOnHoverLink } from "@/components/Link";
import { Hero } from "@/app/[locale]/_components/Hero";
import { BestSellers } from "@/app/[locale]/_components/BestSellers";
// import { db } from "@/lib/prisma";


import About from "@/app/[locale]/about/page";
import Contact from "@/app/[locale]/contact/page";
import MainHeading from "@/components/MainHeading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "./dictionaries";
import { title } from 'process';
export default async function Home() {
    const locale=await getCurrentLocale()
    const {about}= await getDictionary(locale);
  return (

    <main className="">
      <Hero />
      <BestSellers />
      <div className="text-center ">
        <MainHeading title={about.title} subtitle={about.decription} />
        <About />
      </div>

      <Contact />
    </main>
  );
}
