import { Pages } from "@/constants/enums";
import { FormProps, IFormField } from "@/types/app";
import { HTMLInputTypeAttribute } from "react";

export default function useFormFields({
  slug,
  dictionary,
}: FormProps): IFormField[] {
  const get = (i: number) => dictionary?.[i];

  const loginFields: IFormField[] = [
    {
      label: get(0)?.label as string,
      name: get(0)?.name as string,
      type: "email",
      placeholder: get(0)?.placeholder as string,
    },
    {
      label: get(1)?.label as string,
      name: get(1)?.name as string,
      type: "password",
      placeholder: get(1)?.placeholder as string,
    },
  ];

  const signupFields: IFormField[] = [
    {
      label: get(0)?.label as string,
      name: get(0)?.name as string,
      type: "text",
      placeholder: get(0)?.placeholder as string,
    },
    {
      label: get(1)?.label as string,
      name: get(1)?.name as string,
      type: "email",
      placeholder: get(1)?.placeholder as string,
    },
    {
      label: get(2)?.label as string,
      name: get(2)?.name as string,
      type: "password",
      placeholder: get(2)?.placeholder as string,
    },
    {
      label: get(3)?.label as string,
      name: get(3)?.name as string,
      type: "password",
      placeholder: get(3)?.placeholder as string,
    },
  ];

  const adminFields: IFormField[] = [
    {
      label: get(0)?.label as string,
      name: get(0)?.name as string,
      type: "text",
      placeholder: get(0)?.placeholder as string,
    },
    {
      label: get(1)?.label as string,
      name: get(1)?.name as string,
      type: "email",
      placeholder: get(1)?.placeholder as string,
    },
    {
      label: get(2)?.label as string,
      name: get(2)?.name as string,
      type: "number",
      placeholder: get(2)?.placeholder as string,
    },
    {
      label: get(3)?.label as string,
      name: get(3)?.name as string,
      type: get(3)?.type as HTMLInputTypeAttribute,
      placeholder: get(3)?.placeholder as string,
    },
    {
      label: get(4)?.label as string,
      name: get(4)?.name as string,
      type: get(4)?.type as HTMLInputTypeAttribute,
      placeholder: get(4)?.placeholder as string,
    },
    {
      label: get(5)?.label as string,
      name: get(5)?.name as string,
      type: get(5)?.type as HTMLInputTypeAttribute,
      placeholder: get(5)?.placeholder as string,
    },
    {
      label: get(6)?.label as string,
      name: get(6)?.name as string,
      type: get(6)?.type as HTMLInputTypeAttribute,
      placeholder: get(6)?.placeholder as string,
    },
    {
      label: get(7)?.label as string,
      name: get(7)?.name as string,
      type: get(7)?.type as HTMLInputTypeAttribute,
      placeholder: get(7)?.placeholder as string,
    },
  ];

  const profileFields: IFormField[] = [
    {
      label: get(0)?.label as string,
      name: get(0)?.name as string,
      type: "text",
      placeholder: get(0)?.placeholder as string,
    },
    {
      label: get(1)?.label as string,
      name: get(1)?.name as string,
      type: "email",
      placeholder: get(1)?.placeholder as string,
    },
    {
      label: get(2)?.label as string,
      name: get(2)?.name as string,
      type: "number",
      placeholder: get(2)?.placeholder as string,
    },
    {
      label: get(3)?.label as string,
      name: get(3)?.name as string,
      type: get(3)?.type as HTMLInputTypeAttribute,
      placeholder: get(3)?.placeholder as string,
    },
    {
      label: get(4)?.label as string,
      name: get(4)?.name as string,
      type: get(4)?.type as HTMLInputTypeAttribute,
      placeholder: get(4)?.placeholder as string,
    },
    {
      label: get(5)?.label as string,
      name: get(5)?.name as string,
      type: get(5)?.type as HTMLInputTypeAttribute,
      placeholder: get(5)?.placeholder as string,
    },
    {
      label: get(6)?.label as string,
      name: get(6)?.name as string,
      type: get(6)?.type as HTMLInputTypeAttribute,
      placeholder: get(6)?.placeholder as string,
    },
  ];

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