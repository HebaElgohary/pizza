import React from 'react'
import EditUserForm from '../../../../components/EditUserForm'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import useFormFields from '@/hooks/useFormFields'
import { getServerSession } from 'next-auth'
import { getDictionary } from '../../dictionaries'
import { authOptions } from '@/server/db/auth'
import { UserRole } from '@prisma/client'
import { Routes } from '@/constants/enums'
export default async function page() 
{

    const session=await getServerSession(authOptions)
    const role=session?.user?.role
    const locale = await getCurrentLocale()
    const dict=await getDictionary(locale)
  const dictionary=role==UserRole.ADMIN?dict.adminForm['data']:dict.profileForm['data']
    const formFields = useFormFields({slug:`${Routes.PROFILE}`,dictionary:dictionary,translation:locale })
  return (
    <div className=' !min-h-[70vh] text-red flex justify-center items-center'>profile page

    <EditUserForm  >

    </EditUserForm>
    
    </div>
  )
}
