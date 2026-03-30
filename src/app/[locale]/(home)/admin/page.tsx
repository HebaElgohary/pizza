import React from "react";
import EditUserForm from "../../../../components/EditUserForm/EditUserForm";
import { Pages, Routes } from "@/constants/enums";
export default function page() {
  return (
    <div
      className="!min-h-[50vh]  container
      text-red-500 
    "  
    >
      <EditUserForm slug={Pages.ADMIN} />
    </div>
  );
}
