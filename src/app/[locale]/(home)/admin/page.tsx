import React from "react";
import EditUserForm from "../../../../components/EditUserForm/EditUserForm";
import { Routes } from "@/constants/enums";
export default function page() {
  return (
    <div
      className="!min-h-[60vh]
      text-red-500 
    "  
    >
      <EditUserForm slug={Routes.ADMIN} />
    </div>
  );
}
