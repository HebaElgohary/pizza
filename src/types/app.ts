import { User } from "@prisma/client";
import { HTMLInputTypeAttribute } from "react";

export interface IOption {
  label: string;
  value: string;
}

export interface IFormFields {
  slug: string;
}
export interface IFormFieldsVar extends IFormFields {
  translation?: any;
}

export interface FormProps extends IFormFieldsVar {
  dictionary: any;
  validationsError?: any;
  data?: FormData;

}

export interface IFormField {
  name: string;
  label?: string;
  type: "text" | "password"| "email" | "number" | "date" | "textarea"|'radio'|HTMLInputTypeAttribute ;
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
  validationsError?:any;
  dictionary?: any;
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
  
