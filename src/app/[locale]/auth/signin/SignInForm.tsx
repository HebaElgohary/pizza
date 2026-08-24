"use client";
import Form from "@/components/form-fields/Form";
import React, { useRef, useState } from "react";
import type { dictType } from "@/types/translation";
import { signIn, useSession } from "next-auth/react";
import { toast } from "sonner";

import { Pages, Routes } from "@/constants/enums";
import Link from "next/link";
import { Languages } from "@/constants/enums";
import { Locale } from "@/i18n.config";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function SignInForm({
  login,
  locale,
}: {
  login: dictType["login"];
  locale: Locale;
}) {
  const session = useSession();
  console.log("user ++++++++++++++++ session", session);
  const router = useRouter();
  const formData = useRef<HTMLFormElement>(null);
  const data = Object.fromEntries(new FormData(formData?.current || undefined));
  const [validationError, setValidationError] = useState({
    email: [],
    password: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handelSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.current) return;

    const data = Object.fromEntries(
      new FormData(formData?.current || undefined),
    );

    console.log(data);
    //handle form submission logic here
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        locale,
      });
      if (res?.error) {
        console.log(res.error); // هنا هتشوفي validationError أو incorrect password

        const errors = JSON.parse(res.error);
        console.log(errors.validationError); // هنا هتشوفي validationError أو incorrect password
        console.log(errors.responseError); // هنا هتشوفي validationError أو incorrect password

        setValidationError(errors.validationError);
        errors.responseError && toast.error(errors.responseError);
        const responseError = errors.responseError;
      }
      if (res?.ok) {
        console.log(res);

        toast.success("تم تسجيل الدخول بنجاح 🎉");
        router.push(`/${locale}/${Routes.ROOT}`);
      }
    } catch (error) {
      toast.error("حدث خطأ اثناء تسجيل الدخول");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form

    
      className="flex flex-col gap-4 "
      ref={formData}
      onSubmit={(e) => handelSubmit(e)}
    >
      <Form
        slug={Pages.LOGIN}
        translation={Languages.ENGLISH}
        dictionary={login.data}
        validationsError={validationError}
      />
      <p className="text-sm">
        {login.p}{" "}
        <Link
          href={`/${locale}/${Routes.AUTH}/${Pages.Register}`}
          className="text-primary font-semibold hover:underline"
        >
          {login.span}
        </Link>
      </p>

      <Button
        className="!p-3 rounded-lg text-lg font-semibold"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="loading loading-spinner">loading ...</span>
        ) : (
          login.btn
        )}
      </Button>
    </form>
  );
}
