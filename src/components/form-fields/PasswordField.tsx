"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Props } from "@/types/app";
import { Input } from "../ui/input";

function PasswordField({
  name,
  label,
  type,
  placeholder,
  disabled,
  autoFocus,
  readonly,
  className,
  data,
  validationsError,
}: Props) {
  const [show, setShow] = useState(false);

  const value = data?.get(name)?.toString() ?? "";

  const errors =
    validationsError && Array.isArray(validationsError?.[name])
      ? validationsError[name]
      : [];

  return (
    <div className="flex flex-col !gap-1">
      <div className="relative">
        <Input
          disabled={disabled}
          autoFocus={autoFocus}
          readOnly={readonly}
          name={name}
          defaultValue={value}
          type={show ? "text" : type}
          id={name}
          placeholder={placeholder}
          className={`
            !h-11
            !rounded-xl
            !border-gray-200
            !bg-gray-50
            !px-4
            !pr-11
            transition-all
            placeholder:text-gray-400
            focus:!border-primary
            focus:!bg-white
            focus:!ring-2
            focus:!ring-primary/20
            ${className ?? ""}
          `}
        />

        <button
  type="button"
  onClick={() => setShow((prev) => !prev)}
  className="
    absolute
    top-1/2
    -translate-y-1/2
    text-gray-400
    transition-colors
    hover:text-primary
    ltr:right-3
    rtl:left-3
  "
  aria-label={show ? "Hide password" : "Show password"}
>
  {show ? <EyeOff size={18} /> : <Eye size={18} />}
</button>
      </div>

      {errors.map((error, index) => (
        <p
          key={index}
          className="!px-3 text-sm text-destructive"
        >
          {error}
        </p>
      ))}
    </div>
  );
}

export default PasswordField;