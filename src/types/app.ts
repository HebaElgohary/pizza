import { User } from "@prisma/client";

export interface IOption {
  label: string;
  value: string;
}

export interface IFormFields {
  slug: string;
}
export interface IFormFieldsVar extends IFormFields {
  translation: unknown;
}

export interface FormProps extends IFormFieldsVar {
  dictionary: unknown;
  validationsError?: unknown;
  data?: FormData;

}

export interface IFormField {
  name: string;
  label?: string;
  type: "text" | "password"| "email" | "number" | "date" | "textarea" | unknown;
  placeholder?: string;
  disabled?: boolean;
  options?: IOption;
  autoFocus?: boolean;
  id?: string;
  defaultValue?: string;
  readonly?: boolean;
  className?: string;
}
export interface Props extends IFormField {
  validationsError?: unknown;
  dictionary?: unknown;
  data?: FormData;
  user?:User

}

export type SignUpState = {
      status: number;
      error?: {
        name?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      formdata?: FormData;
      message?: string;
    }
  
