// Zod schema for authentication pages (login, register)
import * as z from "zod";
import { dictType } from "@/types/translation";

export const loginSchema = (dict: dictType) =>
  z.object({
    email: z
      .string()
      .trim()
      .nonempty(dict.validations.emailRequired)
      .refine((val) => val === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
        message: dict.validations.emailValid,
      }),

    password: z
      .string()
      .nonempty(dict.validations.passwordRequired)
      .superRefine((val, ctx) => {
        // ⛔ لو فاضي، وقف هنا
        if (!val) return;

        if (val.length < 8) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: dict.validations.smallPassword,
          });
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])/.test(val)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: dict.validations.passwordValid,
          });
        }
      }),
  });

  
/* ---------------- REGISTER ---------------- */

export const registerSchema = (dict: dictType) =>
  z
    .object({
      name: z
        .string()
        .trim()
        .nonempty(dict.validations.nameRequired)
        .min(2, dict.validations.nameMin),

     email: z
      .string()
      .trim()
      .nonempty(dict.validations.emailRequired)
      .refine((val) => val === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
        message: dict.validations.emailValid,
      }),

      password: z
        .string()
        .nonempty(dict.validations.passwordRequired)
        .superRefine((val, ctx) => {
          if (!val) return;

          if (val.length < 8) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: dict.validations.smallPassword,
            });
          }

          if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])/.test(val)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: dict.validations.passwordValid,
            });
          }
        }),

      confirmPassword: z
        .string()
        .nonempty(dict.validations.confirmPasswordRequired),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"], // 👈 error shows under confirm password
      message: dict.validations.passwordMismatch,
    });

/* ---------------- TYPES ---------------- */

export type validationErrors =
  | {
      [key: string]: string[];
    }
  | undefined;
