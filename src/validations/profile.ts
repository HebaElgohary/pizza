import { dictType } from "@/types/translation";
import { z } from "zod";

export const profileSchema = (dict:dictType) => z.object({
  name: z
    .string().trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  phone: z
    .string()
    .regex(/^(\+20|0)?1[0-9]{9}$/, "Invalid Egyptian phone number"),

  streetAddress: z
    .string()
    .min(5, "Address is too short")
    .max(100, "Address is too long"),

  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Postal code must be 5 digits"),

  city: z
    .string()
    .min(2, "City name is too short"),

  country: z
    .string()
    .min(2, "Country name is too short"),
});