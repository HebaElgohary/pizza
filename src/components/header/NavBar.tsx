"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { PrefetchOnHoverLink } from "@/components/Link";
import { Routes, Pages, Languages } from "@/constants/enums";
import { Button, buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
// import dynamic from "next/dynamic";

import { dictType } from "@/types/translation";

import { X } from "lucide-react";
import { Locale } from "@/i18n.config";
import CartButton from "./CartButton";
import AuthBtn from "./AuthBtn";
import { Session } from "next-auth";

export function NavBar({
  locale,
  nav,
  className,
  initialSession
}: {
  locale: Locale;
  nav: dictType["nav"];
  className?: string;
  initialSession:Session|null
}) {
  const pathName = usePathname();
  const router = useRouter();
  const changeLanguage = () => {
    const newLocale =
      locale === Languages.ENGLISH ? Languages.ARABIC : Languages.ENGLISH;

    const segments = pathName.split("/");
    segments[1] = newLocale;
    const newpath = segments.join("/");
    router.push(newpath);
  };
  const [open, setOpen] = useState(false);

  const links = [
    { id: "menu", title: nav.menu, href: Routes.MENU },
    { id: "about", title: nav.about, href: Routes.ABOUT },
    { id: "contact", title: nav.contact, href: Routes.CONTACT },
    // { id: "login", title: nav.login, href: `${Routes.AUTH}/${Pages.LOGIN}` },
  ];

  return (
    <nav className="relative">
      <ul
        className={` hidden md:flex gap-8 text-xl font-semibold items-center text-gray-500  ${className}`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <PrefetchOnHoverLink
              href={`/${locale}/${link.href}`}
              className={` !py-6 !py-11 !text-xl !rounded-3xl !mx-4 hover:text-primary `}
            >
              {link.title}
            </PrefetchOnHoverLink>
          </li>
        ))}
        <li>
          <Button
            className="text-lg text-black !p-2 bg-gray-200"
            onClick={changeLanguage}
          >
            {locale == Languages.ARABIC ? "English" : "العربية"}
          </Button>
        </li>
        <li>
          <AuthBtn initialSession={initialSession} nav={nav} locale={locale}></AuthBtn>
        </li>
        <li>
        {mounted&&  <CartButton />}
        </li>
      </ul>
      {open && (
        <X
          className="!w-20 md:hidden text-red-500 bg-transparent hover:text-primary !mt-2 absolute right-0"
          onClick={() => setOpen(!open)}
        ></X>
      )}

      {!open && (
        <Menu
          className="!w-20 md:hidden text-accent-foreground bg-transparent hover:text-primary"
          onClick={() => setOpen(!open)}
        ></Menu>
      )}

      {/* nav links in sm screens */}
      <ul
        className={
          open
            ? `flex flex-col w-full md:hidden gap-3 mt-4 text-xs font-semibold items-center text-gray-500 !p-5  ${className}`
            : "hidden "
        }
      >
        {links.map((link) => (
          <li key={link.id}>
            <PrefetchOnHoverLink
              href={`/${locale}/${link.href}`}
              className={
                link.href === `/${locale}/${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({
                      size: "sm",
                    })} !p-3 !px-3 !md:px-3 !text-xl !rounded-3xl !mx-4`
                  : "hover:text-primary "
              }
            >
              {link.title}
            </PrefetchOnHoverLink>
          </li>
        ))}
        <li>
          <Button
            onClick={changeLanguage}
            className="text-lg text-black !p-2 bg-gray-200"
          >
            {locale == Languages.ARABIC ? "English" : "العربية"}
          </Button>
        </li>
        <li>
          <AuthBtn initialSession={initialSession} locale={locale} nav={nav} ></AuthBtn>
        </li>
        <li>
          <CartButton />
        </li>
      </ul>

      {/* nav links in sm screens */}
    </nav>
  );
}
