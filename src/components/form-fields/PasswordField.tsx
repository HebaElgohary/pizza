'use client'
import { useState } from "react"
import {  Props } from "@/types/app"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"

function PasswordField({ name,
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
  error,

}:Props) {

    const [show,setShow]=useState(false)
  return (
        <div className="flex flex-col gap-1">
      <Label htmlFor={name} className="font-semibold !px-1">
        {label}
      </Label>
      <Input
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        type={show ? "text" : type}
        id={name}
        placeholder={placeholder}
        className={` !border-none !focus:outline-none`}
      />

    </div>
  )
}

export default PasswordField
