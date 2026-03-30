import { Routes } from '@/constants/enums'
import useFormFields from '@/hooks/useFormFields'
import Image from 'next/image'
import React from 'react'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/db/auth'
import { UserRole } from '@prisma/client'
import FormFields from '../form-fields/FormFields'

export default async function edituserform() {
  const session=await getServerSession(authOptions)
  const role=session?.user?.role
  const locale = await getCurrentLocale()
  const dict=await getDictionary(locale)
const dictionary=role==UserRole.ADMIN?dict.adminForm['data']:dict.profileForm['data']
  const formFields = useFormFields({slug:`${Routes.PROFILE}`,dictionary:dictionary,translation:locale })
 console.log(formFields)
  return (
    <div >
      
        <form action="" className='flex !p-11 gap-5 flex-col md:flex-row justify-center '>
            edituserform
            <div className='w-full md:w-1/3 flex justify-center items-start'>
                <Image
                        src="/images/add-photo.jpg"
                        width={110}
                        height={60}
                        alt="add photo"
                        className="!p-2 "
                        priority
                ></Image>
            </div>
            <div className='w-full md:w-2/3'>
              {formFields.map((field)=><div  key={field.id} >
              <FormFields {...field} validationsError={';'} />
              </div>)}
            </div>

        </form>
    </div>
  )
}
