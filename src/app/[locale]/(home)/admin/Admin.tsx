import EditUserForm from '@/components/EditUserForm/EditUserForm'
import { authOptions } from '@/server/db/auth'
import { User } from '@prisma/client'
import { getServerSession } from 'next-auth'
import React from 'react'
import { useClientSession } from "@/hooks/useClientSession";
import { Pages } from "@/constants/enums";

export async  function Admin
() {
     const initialSession=await getServerSession(authOptions)
  const user=initialSession?.user as User
  return (
    <div>
   <main
      className="!min-h-[50vh]  container
      text-red-500 
    "  
    >
      <EditUserForm slug={Pages.ADMIN}  user={user }/>
    </main>
    </div>
  )
}
