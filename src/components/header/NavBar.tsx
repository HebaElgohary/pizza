
"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Menu, X } from "lucide-react";

import { PrefetchOnHoverLink } from "@/components/Link";
import { Routes, Languages } from "@/constants/enums";
import { Button } from "../ui/button";

import { dictType } from "@/types/translation";
import { Locale } from "@/i18n.config";

import CartButton from "./CartButton";
import AuthBtn from "./AuthBtn";

import { Session } from "next-auth";
import { useClientSession } from "@/hooks/useClientSession";
import { UserRole } from "@prisma/client";

export function NavBar({
  locale,
  nav,
  className,
  initialSession,
}: {
  locale: Locale;
  nav: dictType["nav"];
  className?: string;
  initialSession: Session | null;
}) {
  const { session } = useClientSession(initialSession);

  const role = session?.user?.role;

  const profile =
    role === UserRole.ADMIN
      ? {
          id: "admin",
          title: nav.admin,
          href: Routes.ADMIN,
        }
      : {
          id: "profile",
          title: nav.profile,
          href: Routes.PROFILE,
        };

  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const links = [
    {
      id: "menu",
      title: nav.menu,
      href: Routes.MENU,
    },
    {
      id: "about",
      title: nav.about,
      href: Routes.ABOUT,
    },
    {
      id: "contact",
      title: nav.contact,
      href: Routes.CONTACT,
    },
  ];

  const changeLanguage = () => {
    const newLocale =
      locale === Languages.ENGLISH
        ? Languages.ARABIC
        : Languages.ENGLISH;

    const segments = pathname.split("/");

    segments[1] = newLocale;

    const newPath = segments.join("/");

    setOpen(false);

    router.push(newPath);
  };

  const handleNavigation = () => {
    setOpen(false);
  };

  return (
    <nav className="relative w-full">
      {/* ================= DESKTOP / TABLET ================= */}
      <div className="hidden items-center justify-end gap-2 md:flex lg:gap-4">
        {/* Navigation Links */}
        <ul className="flex items-center gap-1 lg:gap-2">
          {links.map((link) => (
            <li key={link.id}>
              <PrefetchOnHoverLink
                href={`/${locale}/${link.href}`}
                className={`
                  rounded-xl
                  !px-2
                  !py-3
                  text-sm
                  font-semibold
                  text-gray-500
                  transition-colors
                  hover:text-primary
                  lg:!px-3
                  lg:text-base
                  xl:!px-4
                  xl:text-lg
                  ${className ?? ""}
                `}
              >
                {link.title}
              </PrefetchOnHoverLink>
            </li>
          ))}

          {/* Profile / Admin */}
          <li>
            <PrefetchOnHoverLink
              href={`/${locale}/${profile.href}`}
              className={`
                rounded-xl
                !px-2
                !py-3
                text-sm
                font-semibold
                text-gray-500
                transition-colors
                hover:text-primary
                lg:!px-3
                lg:text-base
                xl:!px-4
                xl:text-lg
                ${className ?? ""}
              `}
            >
              {profile.title}
            </PrefetchOnHoverLink>
          </li>
        </ul>

        {/* Language */}
        <Button
          type="button"
          onClick={changeLanguage}
          className="
            shrink-0
            rounded-xl
            bg-gray-100
            !px-3
            !py-2
            text-sm
            font-semibold
            text-gray-800
            hover:bg-gray-200
            lg:text-base
          "
        >
          {locale === Languages.ARABIC ? "English" : "العربية"}
        </Button>

        {/* Auth */}
        <div className="shrink-0">
          <AuthBtn
            initialSession={initialSession}
            nav={nav}
            locale={locale}
          />
        </div>

        {/* Cart */}
        <div className="shrink-0">
          <CartButton />
        </div>
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="flex items-center justify-end gap-2 md:hidden">
        {/* Cart */}
        <CartButton />

        {/* Menu Button */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="
            h-10
            w-10
            rounded-xl
            text-gray-700
            hover:bg-gray-100
            hover:text-primary
          "
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            z-50
            !mt-2
            w-[calc(100vw-2rem)]
            max-w-sm
            overflow-hidden
            rounded-2xl
            border
            border-gray-100
            bg-white
            !p-4
            shadow-xl
            md:hidden
          "
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <PrefetchOnHoverLink
                  href={`/${locale}/${link.href}`}
                  onClick={handleNavigation}
                  className="
                    block
                    rounded-xl
                    !px-4
                    !py-3
                    text-base
                    font-semibold
                    text-gray-600
                    transition-colors
                    hover:bg-primary/10
                    hover:text-primary
                  "
                >
                  {link.title}
                </PrefetchOnHoverLink>
              </li>
            ))}

            {/* Profile */}
            <li>
              <PrefetchOnHoverLink
                href={`/${locale}/${profile.href}`}
                onClick={handleNavigation}
                className="
                  block
                  rounded-xl
                  !px-4
                  !py-3
                  text-base
                  font-semibold
                  text-gray-600
                  transition-colors
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                {profile.title}
              </PrefetchOnHoverLink>
            </li>

            {/* Divider */}
            <li className="!my-2 border-t border-gray-100" />

            {/* Language */}
            <li>
              <Button
                type="button"
                onClick={changeLanguage}
                className="
                  w-full
                  justify-center
                  rounded-xl
                  bg-gray-100
                  !py-3
                  text-base
                  font-semibold
                  text-gray-800
                  hover:bg-gray-200
                "
              >
                {locale === Languages.ARABIC
                  ? "English"
                  : "العربية"}
              </Button>
            </li>

            {/* Auth */}
            <li className="flex justify-center !pt-2">
              <AuthBtn
                initialSession={initialSession}
                locale={locale}
                nav={nav}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
