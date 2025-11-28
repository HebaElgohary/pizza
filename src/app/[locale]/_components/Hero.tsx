import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { getDictionary } from "../dictionaries";
import { Languages, Routes } from "@/constants/enums";
import { headers } from "next/headers";
import { Locale } from "@/i18n.config";
import Header from "../../../components/header/index";
import Link from "next/link";

export async function Hero() {
  const url = (await headers()).get("x-url");
  const locale = (url?.split("/")[3] ?? Languages.ENGLISH) as Locale;

  console.log("url is ", url);
  console.log("locale is ", locale);

  // console.log (params)
  const { hero } = await getDictionary(locale);
  return (
    <section className="relative w-full h-screen md:h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/OIP (2).png"
        alt="Background"
        fill
        className="object-cover blur-xs"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}

      {/* Header */}
      <div className="container !pt-5 absolute  !top-0">
        <Header className= "text-white"/>
      </div>

      <div className="relative z-10 text-center md:text-start  max-w-3xl !px-6">
        <h1 className="text-white text-3xl md:text-5xl font-bold !mb-4">
          {hero.title}
        </h1>

        <p className="text-white/80 text-lg md:text-xl !mb-6">
          {hero.decription}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start !mt-6">
        <Button className="!p-6 rounded-2xl text-xl" >
           <a href={Routes.MENU}> 
            {hero.btn1}
                     </a>

          </Button>

          <Link href={Routes.ABOUT}>
          <Button
            variant="outline"
            className="!p-6 rounded-2xl text-xl w-full md:w-fit border-white text-gray-600 "
          >
           
            {hero.btn2}
                  <span className="w-6 h-6 rounded-xl border-white border-1 flex items-center justify-center p-">
                  {" "}
                  {locale == Languages.ARABIC && <MoveLeft />}{" "}
                  {locale == Languages.ENGLISH && <MoveRight />}{" "}
                </span>
          </Button>
                </Link>

        </div>
      </div>
    </section>
  );
}
