import type { GetStaticPaths } from "astro";
import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, languages } from "./constants";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export type Translation = { [key in keyof typeof languages]?: string };
export function useTranslations(lang: keyof typeof languages) {
  return function t(translation: Translation) {
    return translation[lang] || "";
  };
}

export type LocalePath = { lang: keyof typeof languages; path: string };
export const getLocalePaths = (url: URL): LocalePath[] => {
  return Object.keys(languages).map((lang) => ({
    lang: lang as keyof typeof languages,
    path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, "")),
  }));
};

export const localeParams = (() =>
  Object.keys(languages).map((lang) => ({
    params: { lang },
  }))) satisfies GetStaticPaths;
