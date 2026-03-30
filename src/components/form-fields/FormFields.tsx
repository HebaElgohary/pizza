import { InputTypes } from "@/constants/enums"
import { IFormFieldsVar, Props } from "@/types/app"
import { ReactNode } from "react"
import {TextField} from './TextField'
import PasswordField from './PasswordField'
import RadioField from "./RadioField"
// import {Checkbox} from '@/components/ui/checkbox'

function FormFields({...props}:Props) {
 const {type,validationsError}=props

 const renderField=():ReactNode=>{
    if (type===InputTypes.EMAIL || type===InputTypes.TEXT || type===InputTypes.NUMBER){
        return <TextField {...props} />
    }
    if (type===InputTypes.PASSWORD){
        return <PasswordField {...props} />
    }
   if (type===InputTypes.RADIO){
        return <RadioField {...props} />
    }
    return <TextField {...props} />
 }
 return renderField()
}

export default FormFields
