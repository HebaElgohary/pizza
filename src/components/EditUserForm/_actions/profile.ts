'use server'
import { getDictionary } from "@/app/[locale]/dictionaries";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { SignUpState } from "@/types/app";
import { profileSchema } from "@/validations/profile";

export const updateProfile = async(previousState:SignUpState,formdata:FormData)=>{
const locale = await getCurrentLocale()
const dict = await getDictionary(locale);
    const formValues=Object.fromEntries(formdata.entries())
    const data =profileSchema(dict).safeParse(formValues)
if (data.success===false){
    return {...previousState,...data.error.flatten().fieldErrors}
}

    return {...previousState}
}