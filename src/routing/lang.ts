import i18n from "i18next";

export const getStaticLangPaths = () =>
  i18n.languages.map((lang) => ({ params: { lang } }));

export const getPathLang = (path: string) =>
  i18n.languages.find((lang) => path.startsWith(`/${lang}`));

export const updateLang = (path: string) => {
  const lang = getPathLang(path);
  lang && i18n.changeLanguage(lang);
};

export const pathWithoutLanguage = (path: string): string => {
  const lang = i18n.languages.find((lang) => path.startsWith(`/${lang}`));
  return path.replace(`/${lang}`, "");
};
