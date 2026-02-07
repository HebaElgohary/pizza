"use client";
import { useState } from "react";
import { Props } from "@/types/app";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

function PasswordField({
  name,
  label,
  type,
  placeholder,
  disabled,
  autoFocus,
  options,
  id,
  defaultValue,
  readonly,
  className,
  data,
  validationsError,
}: Props) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name} className="font-semibold !px-1">
        {label}
      </Label>
      <Input
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        defaultValue={data ? (data.get(name)?.toString() as string) : ""}
        type={show ? "text" : type}
        id={name}
        placeholder={placeholder}
        className={` !border-none !focus:outline-none`}
      />
      {validationsError &&  Array.isArray(validationsError?.[name]) &&
        validationsError[name].map((err: string, i: number) => (
          <p className="text-destructive !px-3" key={i}>
            {err}
          </p>
        ))}
    </div>
  );
}

export default PasswordField;
