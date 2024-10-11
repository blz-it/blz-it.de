import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLocale, locales, type LocaleKey } from "./constants";

export const getCurrentLocale = (astroLocale?: string) => {
  return astroLocale ? locales[astroLocale as LocaleKey] : defaultLocale;
};

export type Translation = { [key in LocaleKey]?: string };
export const useTranslations = (astroLocale?: string) => {
  return function t(translations: Translation): string {
    const locale = getCurrentLocale(astroLocale);
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

export const localeParams = Object.keys(locales).map((lang) => ({
  params: { lang },
}));
