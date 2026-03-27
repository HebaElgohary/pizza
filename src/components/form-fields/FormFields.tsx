import { InputTypes } from "@/constants/enums"
import { IFormFieldsVar, Props } from "@/types/app"
import { ReactNode } from "react"
import {TextField} from './TextField'
import PasswordField from './PasswordField'
// import {Checkbox} from '@/components/ui/checkbox'

function FormFields(props:Props) {
 const {type,validationsError}=props
 const t = type as unknown as InputTypes

 const renderField=():ReactNode=>{
    if (t===InputTypes.EMAIL || t===InputTypes.TEXT ||t===InputTypes.NUMBER){
        return <TextField {...props} />
    }
    if (t===InputTypes.PASSWORD){
        return <PasswordField {...props} />
    }
  
    return <TextField {...props} />
 }
 return renderField()
}

export default FormFields
