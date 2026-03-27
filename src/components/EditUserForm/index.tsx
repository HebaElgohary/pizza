import { Routes } from '@/constants/enums'
import useFormFields from '@/hooks/useFormFields'
import Image from 'next/image'
import React from 'react'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/db/auth'
import { UserRole } from '@prisma/client'
import { FORMERR } from 'dns'
import FormFields from '../form-fields/FormFields'

export default async function index() {
  const session=await getServerSession(authOptions)
  const role=session?.user?.role
  const locale = await getCurrentLocale()
  const dict=await getDictionary(locale)
const dictionary=role==UserRole.ADMIN?dict.adminForm['data']:dict.profileForm['data']
  const formFields = useFormFields({slug:`${Routes.PROFILE}`,dictionary:dictionary,translation:locale })
 console.log(formFields)
  return (
    <div>index



        <form action="">
            edituserform
            <div>
                <Image
                        src="/file.svg"
                        width={110}
                        height={60}
                        alt="logo"
                        className="!p-2 "
                        priority
                ></Image>
            </div>
            <div>
              {formFields.map((field)=><div  key={field.id} >
              <FormFields {...field} validationsError={';'} />
              </div>)}
            </div>

        </form>
    </div>
  )
}
