import FormFields from "@/components/form-fields/FormFields"
import useFormFields from "@/hooks/useFormFields"
import { FormProps, IFormField } from "@/types/app"
import { ReactNode } from "react"


function   Form({slug,translation,dictionary}:FormProps) {
const getFormFields:IFormField[]= useFormFields({slug,translation,dictionary})
 

 const LoginForm=():ReactNode=>{
    return getFormFields.map((field,i)=>{
        return <FormFields key={i} {...field} error='wrong'/>
    })
}
return <LoginForm />
}
export default Form
