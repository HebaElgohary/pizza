import React from "react";
import Image from "next/image";
import { NavBar } from "./NavBar";
import { Button } from "../ui/button";
import { PrefetchOnHoverLink } from "../Link";
import { Routes } from "@/constants/enums";
export default function Index() {
  return (
    <header className="container flex justify-between items-center">
      <PrefetchOnHoverLink href={Routes.ROOT}>
        <span className="flex items-center">
          <Image
            src="/images/pizzeria logo.jpg"
            width={110}
            height={60}
            alt="logo"
            priority
          />
          <p
            className="text-primary text-lg font-bold md:font-extrabold md:text-3xl lg:text-5xl"
            style={{ fontFamily: 'cursive' }}
          >
            Pizza
          </p>
        </span>
      </PrefetchOnHoverLink>
      <NavBar />
    </header>
  );
}
