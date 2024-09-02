export const buildLink = (path: string, language: string) =>
  `/${language}${path.startsWith("/") ? "" : "/"}${path}`;
