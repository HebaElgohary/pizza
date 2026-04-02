import React from "react";
import EditUserForm from "../../../../components/EditUserForm/EditUserForm";
import { Pages } from "@/constants/enums";
import { useClientSession } from "@/hooks/useClientSession";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/db/auth";
import { User } from "@prisma/client";
export default async function page() {
  const initialSession=await getServerSession(authOptions)
  const user=initialSession?.user as User
  // const {session}=useClientSession(initialSession)
  return (
    <div
      className="!min-h-[50vh]  container
      text-red-500 
    "  
    >
      <EditUserForm slug={Pages.ADMIN}  user={user }/>
    </div>
  );
}
