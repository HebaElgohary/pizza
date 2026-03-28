"use server";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { Locale } from "@/i18n.config";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { db } from "@/lib/prisma";
import { SignUpState } from "@/types/app";
import { loginSchema, registerSchema } from "@/validations/auth";
import  bcrypt  from "bcrypt";

export const login = async (
  credentials: Record <"email" | "password", string > | undefined,
  locale: Locale
) => {
  const dict = await getDictionary(locale);
  const result = loginSchema(dict).safeParse(credentials);
  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
      status: 400,
    };
  }
  try {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
    });
    if (!user) {
      return { message: dict.messages.userNotFound, status: 401 };
    }
    const hashedPassword = user.password;
    const isValidPassword = await bcrypt.compare(
      result.data.password,
      hashedPassword
    );
    if (!isValidPassword)
      return {
        message: dict.messages.incorrectPassword,
        status: 401,
      };
    const { password, ...userWIthoutPassword } = user;
    return {
      status: 200,
      message: dict.messages.loginSuccessful,
      user: userWIthoutPassword,
    };
  } catch (error) {
    return { message: dict.messages.unexpectedError, status: 500 };
  }
};

export const signUp = async (prevState:SignUpState,formdata:FormData) : Promise<SignUpState> =>{
  const locale:Locale=await getCurrentLocale()
  const dict = await getDictionary(locale);
  const result= registerSchema(dict).safeParse(
    Object.fromEntries(formdata.entries())
  );
  if (result.success === false) {
    return {
      error: result.error.flatten().fieldErrors,
      status: 400,
      formdata
    };  
  }
  try {
    const userExists = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
    })
    if (userExists) {
      return {
        message: dict.messages.userAlreadyExists,
        status: 409, //conflict error
        formdata
      };
    }
  else{
    const hashedPassword = await bcrypt.hash(result.data.password, 10);
    const user = await db.user.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: hashedPassword,
      },
    });
    // const { password, ...userWIthoutPassword } = user;
    return { status: 201, message: dict.messages.accountCreated };
  }
  } catch (error) {
    return { message: dict.messages.unexpectedError, status: 500 ,formdata};
  }

};
 