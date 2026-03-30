import { Pages, Routes } from '@/constants/enums'
import useFormFields from '@/hooks/useFormFields'
import Image from 'next/image'
import React from 'react'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/db/auth'
import { UserRole } from '@prisma/client'
import FormFields from '../form-fields/FormFields'
import { Button } from '../ui/button'

export default async function edituserform({slug}:{slug:string}) {
  const session=await getServerSession(authOptions)
  // const role=session?.user?.role
  const locale = await getCurrentLocale()
  const dict=await getDictionary(locale)
const dictionary= slug==Pages.ADMIN?dict.adminForm['data']:dict.profileForm['data']
  const formFields = useFormFields({slug,dictionary,translation:locale })
 console.log(formFields)
  return (
    <div >
      
        <form action="" className='flex !p-11 gap-5 flex-col md:flex-row justify-center '>
        
            <div className='w-full md:w-1/3 flex justify-center items-start'>
                <Image
                        src="/images/add-photo.jpg"
                        width={170}
                        height={160}
                        alt="add photo"
                        className="!p-2 "
                        priority
                ></Image>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-2'>
              {formFields.map((field)=><div  key={field.id} >
              <FormFields {...field} validationsError={';'} />
              </div>)}
            <Button type='submit' className='!my-5'> {dict.adminForm.save} </Button>
           
            </div>
        </form>
    </div>
  )
}
