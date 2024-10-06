type LocaleKey = "de" | "en";

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
