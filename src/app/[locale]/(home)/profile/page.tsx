import React from "react";
import EditUserForm from "../../../../components/EditUserForm/EditUserForm";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import useFormFields from "@/hooks/useFormFields";
import { getServerSession } from "next-auth";
import { getDictionary } from "../../dictionaries";
import { authOptions } from "@/server/db/auth";
import { User, UserRole } from "@prisma/client";
import { Routes } from "@/constants/enums";
export default async function page() {
  const session = await getServerSession(authOptions);
 const user=session?.user as User
 
  return (
    <div className="!min-h-[70vh] ">
      <EditUserForm slug={Routes.PROFILE} user={user } ></EditUserForm>
    </div>
  );
}
