import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  ar: () =>
    import("../../dictionaries/ar.json").then((module) => module.default),
};

// asyc function because it do dynamic import
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
