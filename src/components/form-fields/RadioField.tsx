import React from 'react'
import { Label } from '../ui/label'
import { Props } from '@/types/app'

export default function RadioField({
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
  return (
    <div className='flex gap-3'>
        <input type={type} name={name} id={name} />
        <Label htmlFor={name}>{label}</Label>
    </div>
  )
}
