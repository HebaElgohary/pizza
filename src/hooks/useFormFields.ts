import { Pages } from "@/constants/enums";
import { FormProps, IFormField } from "@/types/app";

export default function useFormFields({ slug, dictionary }: FormProps) {
  const loginFields: IFormField[] = [
    {
      label: dictionary[0]?.label,
      name: dictionary[0]?.name,
      type: "email",
      placeholder: dictionary[0]?.placeholder,
    },
    {
      label: dictionary[1]?.label,
      name: dictionary[1]?.name,
      type: "password",
      placeholder: dictionary[1]?.placeholder,
    },
  ];
  const signupFields: IFormField[] = [
    {
      label: dictionary[0]?.label,
      name: `${dictionary[0]?.name}`,
      type: "text",
      placeholder: `${dictionary[0]?.placeholder}`,
    },
    {
      label: `${dictionary[1]?.label}`,
      name: `${dictionary[1]?.name}`,
      type: "email",
      placeholder: `${dictionary[1]?.placeholder}`,
    },
    {
      label: dictionary[2]?.label,
      name: `${dictionary[2]?.name}`,
      type: "password",
      placeholder: `${dictionary[2]?.placeholder}`,
    },
    {
      label: `${dictionary[3]?.label}`,
      name: `${dictionary[3]?.name}`,
      type: "password",
      placeholder: `${dictionary[3]?.placeholder}`,
    },
  ];
  const adminFields: IFormField[] = [
    {
      label: dictionary[0]?.label,
      name: `${dictionary[0]?.name}`,
      type: "text",
      placeholder:`${dictionary[0]?.placeholder}`,
    },
    {
      label: `${dictionary[1]?.label}`,
      name: `${dictionary[1]?.name}`,
      type: "email",
      placeholder: `${dictionary[1]?.placeholder}`,
    },
    {
      label: dictionary[2]?.label,
      name: `${dictionary[2]?.name}`,
      type: "number",
      placeholder: `${dictionary[2]?.placeholder}`,
    },
    {
      label: `${dictionary[3]?.label}`,
      name: `${dictionary[3]?.name}`,
      type: `${dictionary[3]?.type}`,
      placeholder: `${dictionary[3]?.placeholder}`,
    },
    {
      label: `${dictionary[4]?.label}`,
      name: `${dictionary[4]?.name}`,
      type: `${dictionary[4]?.type}`,
      placeholder: `${dictionary[4]?.placeholder}`,
    },
    {
      label: `${dictionary[5]?.label}`,
      name: `${dictionary[5]?.name}`,
      type: `${dictionary[5]?.type}`,
      placeholder: `${dictionary[5]?.placeholder}`,
    },
    {
      label: `${dictionary[6]?.label}`,
      name: `${dictionary[6]?.name}`,
      type: `${dictionary[6]?.type}`,
      placeholder: `${dictionary[6]?.placeholder}`,
    },
       {
      label: `${dictionary[7]?.label}`,
      name: `${dictionary[7]?.name}`, //role
      type: `${dictionary[7]?.type}`,
      placeholder: `${dictionary[7]?.placeholder}`,
    },
  ];
  const profileFields: IFormField[] = [
    {
      label: dictionary[0]?.label,
      name: `${dictionary[0]?.name}`,
      type: "text",
      placeholder: `${dictionary[0]?.placeholder}`,
    },
    {
      label: `${dictionary[1]?.label}`,
      name: `${dictionary[1]?.name}`,
      type: "email",
      placeholder: `${dictionary[1]?.placeholder}`,
    },
    {
      label: dictionary[2]?.label,
      name: `${dictionary[2]?.name}`,
      type: "number",
      placeholder: `${dictionary[2]?.placeholder}`,
    },
    {
      label: `${dictionary[3]?.label}`,
      name: `${dictionary[3]?.name}`,
      type: `${dictionary[3]?.type}`,
      placeholder: `${dictionary[3]?.placeholder}`,
    },
    {
      label: `${dictionary[4]?.label}`,
      name: `${dictionary[4]?.name}`,
      type: `${dictionary[4]?.type}`,
      placeholder: `${dictionary[4]?.placeholder}`,
    },
    {
      label: `${dictionary[5]?.label}`,
      name: `${dictionary[5]?.name}`,
      type: `${dictionary[5]?.type}`,
      placeholder: `${dictionary[5]?.placeholder}`,
    },
    {
      label: `${dictionary[6]?.label}`,
      name: `${dictionary[6]?.name}`,
      type: `${dictionary[6]?.type}`,
      placeholder: `${dictionary[6]?.placeholder}`,
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
