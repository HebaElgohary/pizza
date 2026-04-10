'use client'
import { Pages, Routes } from '@/constants/enums'
import useFormFields from '@/hooks/useFormFields'
import Image from 'next/image'
import React, { useActionState } from 'react'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/db/auth'
import { User, UserRole } from '@prisma/client'
import FormFields from '../form-fields/FormFields'
import { Button } from '../ui/button'
import { SignUpState } from '@/types/app'
import { updateProfile } from './_actions/profile'
import { Locale } from '@/i18n.config'
import { dictType } from '@/types/translation'


export default  function edituserform({slug,user,locale,dict}:{slug:string,user:User ,locale?:Locale,dict?:dictType}) {
  const dictionary= slug==Pages.ADMIN?dict?.adminForm['data']:dict?.profileForm['data']
  const formFields = useFormFields({slug,dictionary,translation:locale })
 console.log(formFields)
 const initialState:SignUpState={
  error:{},
  status:0,
  message:'',
  formdata:new FormData(),
 }
 
 const [state,action,pending]= useActionState(updateProfile,initialState)
  return (
    <div >
      
        <form action={action} className='flex !p-11 gap-5 flex-col md:flex-row justify-center '>
        
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
              <FormFields {...field} user={user} validationsError={';'} />
              </div>)}
            <Button type='submit' className='!my-5' disabled={pending}> {dict?.adminForm.save} </Button>
           
            </div>
        </form>
    </div>
  )
}
