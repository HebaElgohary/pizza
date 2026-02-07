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

import React, { useActionState } from "react";
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

  const [state, action, isPending] = useActionState(signUp, initialState);
  React.useEffect(() => {
  if (state.status === 500 || state.status === 409) {
    toast.error(state.message);
  }
  if (state.status === 201) {
    toast.success(state.message);
      router.push(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`);


  }
}, [state.status,locale,router]);

  return (
    <div>
    <form className="flex flex-col gap-4" action={action}>
      <Form
        slug={Pages.Register}
        translation={Languages.ENGLISH}
        dictionary={register.data}
        validationsError={state.error}
        data={state.formdata}
      />
      <p>
        {register.p}{" "}
        <Link
          href={`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`}
          className="text-primary font-semibold"
        >
          {" "}
          {register.span}{" "}
        </Link>
      </p>
      <Button className="!p-2 " disabled={isPending}>
        {register.btn}{" "}
      </Button>
    </form>
   

    </div>
  );
}
