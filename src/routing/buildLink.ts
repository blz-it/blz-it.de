import i18n from "i18next";

export const buildLink = (path: string) =>
  `/${i18n.language}${path.startsWith("/") ? "" : "/"}${path}`;