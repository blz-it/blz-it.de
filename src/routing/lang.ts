import i18n from "i18next";

export const getStaticLangPaths = () =>
  i18n.languages.map((lang) => ({ params: { lang } }));

export const redirectLang = (path: string): string | undefined =>
  i18n.languages.some((lang) => path.startsWith(`/${lang}`))
    ? undefined
    : `/${i18n.language}${path}`;

export const updateLang = (path: string) => {
  const lang = i18n.languages.find((lang) => path.startsWith(`/${lang}`));
  lang && i18n.changeLanguage(lang);
};
