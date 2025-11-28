import React from "react";
import Image from "next/image";
import { NavBar } from "./NavBar";
import { PrefetchOnHoverLink } from "../Link";
import { Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "@/app/[locale]/dictionaries";

export default async function Index( {className}:{className?:string}) {

  const locale=await getCurrentLocale()
  const {nav}=await getDictionary(locale)
  return (
    <header className="container flex justify-between items-center">
      <PrefetchOnHoverLink href={Routes.ROOT}>
        <span className=" lg:flex items-center ">
          <Image
            src="/images/pizzeria logo.jpg"
            width={110}
            height={60}
            alt="logo"
            className="!p-2 "
            priority
          />
          <p
            className="text-primary text-lg font-bold md:font-extrabold md:text-xl lg:text-2xl !ml-3"
            style={{ fontFamily: 'cursive' }}
          >
            {nav.logo}
          </p>
        </span>
      </PrefetchOnHoverLink>
      <NavBar locale={locale} nav={nav} className={className}/>
    </header>
  );
}
