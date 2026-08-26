"use client";

import Form from "@/components/form-fields/Form";
import { Button } from "@/components/ui/button";
import { Languages, Pages, Routes } from "@/constants/enums";
import { Locale } from "@/i18n.config";
import { signUp } from "@/server/db/_actions/auth";
import { dictType } from "@/types/translation";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import type { SignUpState } from "@/types/app";

export default function RegisterForm({
  register,
  locale,
}: {
  register: dictType["register"];
  locale: Locale;
}) {
  const initialState: SignUpState = {
    status: 0,
    error: {
      name: [],
      email: [],
      password: [],
      confirmPassword: [],
    },
    formdata: new FormData(),
  };

  const router = useRouter();

  const [state, action, isPending] = useActionState(
    signUp,
    initialState
  );

  useEffect(() => {
    if (state.status === 500 || state.status === 409) {
      toast.error(state.message);
    }

    if (state.status === 201) {
      toast.success(state.message);

      router.push(
        `/${locale}/${Routes.AUTH}/${Pages.LOGIN}`
      );
    }
  }, [state.status, locale, router]);

  return (
    <form
      className="!space-y-5"
      action={action}
    >

      {/* Form fields */}
      <div className="!space-y-4">

        <Form
          slug={Pages.Register}
          translation={Languages.ENGLISH}
          dictionary={register.data}
          validationsError={state.error}
          data={state.formdata}
        />

      </div>


      {/* Login link */}
      <div className="flex items-center justify-center !space-x-1 text-sm text-gray-500">

        <span>
          {register.p}
        </span>

        <Link
          href={`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`}
          className="font-bold text-primary transition-colors hover:text-primary/80 hover:underline"
        >
          {register.span}
        </Link>

      </div>


      {/* Submit */}
      <Button
        type="submit"
        disabled={isPending}
        className="
          !h-12
          !w-full
          !rounded-xl
          !p-3
          text-base
          font-bold
          shadow-lg
          shadow-primary/20
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-xl
          hover:shadow-primary/25
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >

        {isPending ? (
          <span className="flex items-center justify-center !space-x-2">
            <span className="!h-4 !w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            <span>Creating account...</span>
          </span>
        ) : (
          register.btn
        )}

      </Button>


      {/* Security message */}
      <p className="text-center text-xs text-gray-400">
        🔒 Your information is safe and secure.
      </p>

    </form>
  );
}