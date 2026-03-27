import React from "react";
import Image from "next/image";
import { NavBar } from "./NavBar";
import { PrefetchOnHoverLink } from "../Link";
import { Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/db/auth";
import { headers } from "next/headers";
import { AuthNavBar } from "@/app/[locale]/auth/AuthNavBar";

export default async function Index({ className }: { className?: string }) {
  const isAuthPage = (await headers())
    .get("x-url")
    ?.split("/")[4]
    ?.startsWith("auth");
  {
    console.log("headers page name", "trueeeeeeeeeee");
  }
  const locale = await getCurrentLocale();
  const { nav } = await getDictionary(locale);
  const initialSession = await getServerSession(authOptions);
  return (
    <header className="container flex justify-between  items-center">
      <div>
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
              style={{ fontFamily: "cursive" }}
            >
              {nav.logo}
            </p>
          </span>
        </PrefetchOnHoverLink>
      </div>
      <div>
        {isAuthPage ? (
          <AuthNavBar
            locale={locale}
            nav={nav}
            className={className}
            initialSession={initialSession}
          />
        ) : (
          <NavBar
            locale={locale}
            nav={nav}
            className={className}
            initialSession={initialSession}
          />
        )}
      </div>
    </header>
  );
}
