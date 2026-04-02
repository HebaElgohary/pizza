import { headers } from "next/headers"; // server api يعنى لازم تشتغل عالسرفر
import { Locale } from "@/i18n.config";

export const  getCurrentLocale =async()=>{
    // const header=Object.fromEntries( (await headers()).entries() )
    // const url=header['x-url'] 
    const url = (await headers()).get('x-url')
    const locale = url?.split('/')[3] as Locale
    return locale
}