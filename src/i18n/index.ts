import type { AstroGlobal } from "astro";
import { getRelativeLocaleUrl } from "astro:i18n";

export type LocaleKey = "de" | "en";

interface Locale {
  label: string;
  lang: string;
  dir?: "rtl" | "ltr";
}

export const locales: Record<LocaleKey, Locale> = {
  de: {
    label: "Deutsch",
    lang: "de",
    dir: "ltr",
  },
  en: {
    label: "English",
    lang: "en",
    dir: "ltr",
  },
};

export const defaultLocale: Locale = locales.de;
export const getCurrentLocale = (astro: AstroGlobal) => {
  return astro.currentLocale
    ? locales[astro.currentLocale as LocaleKey]
    : defaultLocale;
};

export type Translation = { [key in LocaleKey]?: string };
export const useTranslations = (astro: AstroGlobal) => {
  return function t(translations: Translation): string {
    const locale = getCurrentLocale(astro);
    return translations[locale.lang as LocaleKey] || "";
  };
};

interface LocalePath {
  lang: LocaleKey;
  path: string;
}
export const getLocalePaths = (url: URL): LocalePath[] => {
  return Object.keys(locales).map((lang) => ({
    lang: lang as LocaleKey,
    path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, "")),
  }));
};
