import type { GetStaticPaths } from "astro";
import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, languages, type Language } from "./constants";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export type Translation = { [key in Language]?: string };
export function useTranslations(lang: Language) {
  return function t(translation: Translation) {
    return translation[lang] || "";
  };
}

const removeLocalePrefix = (path: string): string => {
  const localePattern = new RegExp(
    `^/(${Object.keys(languages).join("|")})\\b`,
  );
  return path.replace(localePattern, "");
};

export type LocalePath = { lang: Language; path: string };
export const getLocalePaths = (url: URL): LocalePath[] => {
  const cleanPath = removeLocalePrefix(url.pathname);
  return Object.keys(languages).map((lang) => ({
    lang: lang as Language,
    path: getRelativeLocaleUrl(lang, cleanPath),
  }));
};

export const localeParams = (() =>
  Object.keys(languages).map((lang) => ({
    params: { lang: lang as Language },
  }))) satisfies GetStaticPaths;
