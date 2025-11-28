"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function PasswordInput({ id, placeholder,className }: { id: string, placeholder: string,className?:string }) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        className={`${className} border-2 rounded !p-1 w-full pr-10`}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
      >
        {show ? <EyeOff size={18}/> : <Eye size={18}/>}
      </button>
    </div>
  )
}
