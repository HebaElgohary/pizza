
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

export default async function Index({
  className,
}: {
  className?: string;
}) {
  const isAuthPage = (await headers())
    .get("x-url")
    ?.split("/")[4]
    ?.startsWith("auth");

  const locale = await getCurrentLocale();

  const { nav } = await getDictionary(locale);

  const initialSession = await getServerSession(authOptions);

  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto flex min-h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
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
              className="ml-2 hidden text-lg font-bold text-primary sm:block sm:text-xl lg:ml-3 lg:text-2xl"
              style={{ fontFamily: "cursive" }}
            >
              {nav.logo}
            </p>
          </div>
        </PrefetchOnHoverLink>

        {/* Navigation */}
        <div className="flex min-w-0 flex-1 justify-end">
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
      </div>
    </header>
  );
}
