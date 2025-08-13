"use client";
import React, { useState } from "react";
import { PrefetchOnHoverLink } from "@/components/Link";
import { title } from "process";
import { Routes, Pages } from "@/constants/enums";
import { Button, buttonVariants } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import { X } from "lucide-react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "menu", title: "Menu", href: Routes.MENU },
    { id: "about", title: "About", href: Routes.ABOUT },
    { id: "contact", title: "Contact", href: Routes.CONTACT },
    { id: "login", title: "Login", href: `${Routes.AUTH}/${Pages.LOGIN}` },
  ];
  return (
    <nav className="relative">
      <ul
        className={`${
       
         "hidden md:flex gap-5 text-lg font-semibold items-center text-muted-foreground"
    }`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <PrefetchOnHoverLink
              href={link.href}
              className={
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({
                      size: "lg",
                    })} !p-6 !px-11 !text-xl !rounded-3xl !mx-4`
                  : "hover:text-primary "
              }
            >
              {link.title}
            </PrefetchOnHoverLink>
          </li>
        ))}
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
        className={`${
        open
        ? "flex flex-col w-full md:hidden gap-3 mt-4 text-xs font-semibold items-center text-muted-foreground !p-5"
        : "hidden "
    }`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <PrefetchOnHoverLink
              href={link.href}
              className={
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
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
      </ul>
{/* nav links in sm screens */}

   
    </nav> 
  );
}
