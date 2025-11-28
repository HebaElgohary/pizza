import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import{match as matchLocale} from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator';
import { i18n, LanguageType } from './i18n.config';
 
function getLocale(request:NextRequest) : string  {

const negotiatorHeaders:Record<string,string>={};
request.headers.forEach((value,key)=>(negotiatorHeaders[key]=value));
 
const locales:LanguageType[]=i18n.locales
const languages= new Negotiator ({headers:negotiatorHeaders}).languages()
let locale='';
try {
  locale =matchLocale(languages,locales,i18n.defaultLocale);

}
catch(error:any){
  locale=i18n.defaultLocale
}
return locale
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const requestHeaders=new Headers (request.headers);
  requestHeaders.set('x-url',request.url)

  const pathName=request.nextUrl.pathname
  const localeIsMissing=i18n.locales.every((locale)=> !pathName.startsWith(`/${locale}`))
  if(localeIsMissing){
    const locale=getLocale(request)
    return NextResponse.redirect(new URL (`/${locale}${pathName}`, request.url) )
  }
  return NextResponse.next({request:{headers:requestHeaders}})
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*|favicon.ico).*)'
  ]
};

