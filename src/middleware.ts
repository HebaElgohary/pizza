import  { NextRequest ,NextResponse} from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n, Locale } from "./i18n.config";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

import { Pages, Routes } from "./constants/enums";

import { UserRole } from "@prisma/client";
function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = Object.fromEntries(
    request.headers

  );

  const locales: Locale[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  let locale = "";
  try {
    locale = matchLocale(languages, locales, i18n.defaultLocale);
  } catch (error: any) {
    locale = i18n.defaultLocale;
  }
  return locale;
}

// This function can be marked `async` if using `await` inside

export default withAuth(
  async function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);

    const pathName = request.nextUrl.pathname;
    const localeIsMissing = i18n.locales.every(
      (locale) => !pathName.startsWith(`/${locale}`)
    );
    if (localeIsMissing) {
      const locale = getLocale(request);
      return NextResponse.redirect(

        new URL(`/${locale}${pathName}`, request.url)
      );
    }
    const locale = pathName.split("/")[1] as Locale;
    const isAuth = await getToken({ req: request });
      const role=isAuth?.role

    const isAuthPage = pathName.startsWith(`/${locale}/${Routes.AUTH}`);
    const protectedRoute = [Routes.PROFILE, Routes.ADMIN];
    const isProtectedRoute = protectedRoute.some((route) => {
      return pathName.startsWith(`/${locale}/${route}`);
    });
    // if not loggedIn and access protected route
    if (!isAuth && isProtectedRoute) {
      return NextResponse.redirect(
        new URL(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`, request.url)
      );
    }
    ////////////////////////////////////////////

        // if  loggedIn and access auth route

    if(isAuth && isAuthPage){
      if (role === UserRole.ADMIN){
        return NextResponse.redirect(new URL(`/${locale}/${Routes.ADMIN}`,request.url))
      }
      return NextResponse.redirect(new URL(`/${locale}/${Routes.PROFILE}`,request.url))

    }

    // logged in user && not admin && access admin
    if(isAuth && role!==UserRole.ADMIN && pathName.startsWith(`/${locale}/${Routes.ADMIN}`)){
      return NextResponse.redirect(new URL (`/${locale}/${Routes.PROFILE}`,request.url))

      }
          // logged in user &&  admin && access profile
    if(isAuth && role==UserRole.ADMIN && pathName.startsWith(`/${locale}/${Routes.PROFILE}`)){
      return NextResponse.redirect(new URL (`/${locale}/${Routes.ADMIN}`,request.url))

      }
  
    
    requestHeaders.set("x-locale", locale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  },
  {
    callbacks: {
      authorized(params) {
        return true;
      },
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next|.*\\..*|favicon.ico).*)"],
};
