import React from "react";
import EditUserForm from "../../../../components/EditUserForm/EditUserForm";

import PublicLayout from "@/components/layouts/PublicLayout";
import { Admin } from "./Admin";
export default async function page() {
 
  // const {session}=useClientSession(initialSession)
  return (
    <PublicLayout>
  <Admin />
    </PublicLayout>
  );
}
