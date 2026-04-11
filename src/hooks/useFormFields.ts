import { Pages } from "@/constants/enums";
import { FormProps, IFormField } from "@/types/app";
import { HTMLInputTypeAttribute } from "react";

export default function useFormFields({ slug, dictionary }: FormProps) {
  const loginFields: IFormField[] = [
    {
      label: dictionary0]?.label as string,
      name: dictionary[0]?.name as string,
      type: "email",
      placeholder: dictionary[0]?.placeholder as string,
    },
    {
      label: dictionary[1]?.label as string,
      name: dictionary[1]?.name as string,
      type: "password",
      placeholder: dictionary[1]?.placeholder as string,
    },
  ];
  const signupFields: IFormField[] = [
    {
      label: dictionary[0]?.label as string,
      name: `${dictionary[0]?.name as string}`,
      type: "text",
      placeholder: `${dictionary[0]?.placeholder as string}`,
    },
    {
      label: `${dictionary[1]?.label as string}` as string,
      name: `${dictionary[1]?.name  as string } `,
      type: "email",
      placeholder: `${dictionary[1]?.placeholder as string}`,
    },
    {
      label: dictionary[2]?.label as string,
      name: `${dictionary[2]?.name as string}`,
      type: "password",
      placeholder: `${dictionary[2]?.placeholder as string}`,
    },
    {
      label: `${dictionary[3]?.label}` as string,
      name: `${dictionary[3]?.name  as string } `,
      type: "password",
      placeholder: `${dictionary[3]?.placeholder as string}`,
    },
  ];
  const adminFields: IFormField[] = [
    {
      label: dictionary[0]?.label as string,
      name: `${dictionary[0]?.name as string}`,
      type: "text",
      placeholder:`${dictionary[0]?.placeholder}`,
    },
    {
      label: `${dictionary[1]?.label as string}`,
      name: `${dictionary[1]?.name as string}`,
      type: "email",
      placeholder: `${dictionary[1]?.placeholder as string}`,
    },
    {
      label: dictionary[2]?.label as string,
      name: `${dictionary[2]?.name as string}`,
      type: "number",
      placeholder: `${dictionary[2]?.placeholder as string}`,
    },
    {
      label: `${dictionary[3]?.label as string}`,
      name: `${dictionary[3]?.name as string}`,
      type: `${dictionary[3]?.type as string}`,
      placeholder: `${dictionary[3]?.placeholder as string}`,
    },
    {
      label: `${dictionary[4]?.label as string}`,
      name: `${dictionary[4]?.name as string}`,
      type: `${dictionary[4]?.type as HTMLInputTypeAttribute}`,
      placeholder: `${dictionary[4]?.placeholder as string}`,
    },
    {
      label: `${dictionary[5]?.label as string}`,
      name: `${dictionary[5]?.name as string}`,
      type: `${dictionary[5]?.type as HTMLInputTypeAttribute}`,
      placeholder: `${dictionary[5]?.placeholder as string}`,
    },
    {
      label: `${dictionary[6]?.label as string}`,
      name: `${dictionary[6]?.name as string}`,
      type: `${dictionary[6]?.type as HTMLInputTypeAttribute}`,
      placeholder: `${dictionary[6]?.placeholder as string}`,
    },
       {
      label: `${dictionary[7]?.label as string}`,
      name: `${dictionary[7]?.name as string}`, //role
      type: `${dictionary[7]?.type as HTMLInputTypeAttribute}`,
      placeholder: `${dictionary[7]?.placeholder as string}`,
    },
  ];
  const profileFields: IFormField[] = [
    {
      label: dictionary[0]?. label as string  ,
      name: `${dictionary[0]?.name as string}`,
      type: "text",
      placeholder: `${dictionary[0]?.placeholder as string}`,
    },
    {
      label: `${dictionary[1]?.label as string}`,
      name: `${dictionary[1]?.name as string}`,
      type: "email",
      placeholder: `${dictionary[1]?.placeholder as string}`,
    },
    {
      label: dictionary[2]?.label as string,
      name: `${dictionary[2]?.name as string}`,
      type: "number",
      placeholder: `${dictionary[2]?.placeholder as string}`,
    },
    {
      label: `${dictionary[3]?.label as string}`,
      name: `${dictionary[3]?.name as string}`,
      type: `${dictionary[3]?.type as HTMLInputTypeAttribute}`,
      placeholder: `${dictionary[3]?.placeholder as string}`,
    },
    {
      label: `${dictionary[4]?.label as string}`,
      name: `${dictionary[4]?.name as string}`,
      type: `${dictionary[4]?.type as HTMLInputTypeAttribute}`,
      placeholder: `${dictionary[4]?.placeholder as string}`,
    },
    {
      label: `${dictionary[5]?.label as string}`,
      name: `${dictionary[5]?.name as string}`,
      type: `${dictionary[5]?.type as HTMLInputTypeAttribute}`,
      placeholder: `${dictionary[5]?.placeholder as string}`,
    },
    {
      label: `${dictionary[6]?.label as string}`,
      name: `${dictionary[6]?.name as string}`,
      type: `${dictionary[6]?.type as HTMLInputTypeAttribute}`,
      placeholder: `${dictionary[6]?.placeholder as string}`,
    },
  ];
  // const getFormFields=():IFormField[]=>{
  switch (slug) {
    case Pages.LOGIN:
      return loginFields;
    case Pages.Register:
      return signupFields;
    case Pages.ADMIN:
      return adminFields;
    case Pages.PROFILE:
      return profileFields;
    default:
      return [];
  }
}
// return getFormFields()

// }
