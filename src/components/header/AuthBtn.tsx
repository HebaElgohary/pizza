"use client ";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { dictType } from "@/types/translation";
import { Locale } from "@/i18n.config";
import { Pages, Routes } from "@/constants/enums";
import { useClientSession } from "@/hooks/useClientSession";
import { Session } from "next-auth";
export default function AuthBtn({ nav,locale,initialSession }: { nav: dictType["nav"] ,locale:Locale ,initialSession:Session|null}) {
  const {session} = useClientSession(initialSession);
  // const {  data:session , status } = useSession(); //5
  return (
    <div>
      {session?.user && (
        <Button className="text-lg text-black !p-2 bg-primary " onClick={()=>signOut(   {callbackUrl: `/${locale}/${Routes.AUTH}/${Pages.LOGIN}`})}>
          {nav.logout}
        </Button>
      )}
         {!session?.user && (
        <Button className="text-lg text-black !p-2 bg-primary " onClick={()=>signOut(   {callbackUrl: `/${locale}/${Routes.AUTH}/${Pages.LOGIN}`})}>
          {nav.login}
        </Button>
      )}
    </div>
  );
}
