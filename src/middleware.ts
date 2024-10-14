import { defineMiddleware } from "astro:middleware";
import { defaultLang, languages } from "./i18n";

export const onRequest = defineMiddleware(async (ctx, next) => {
  if (ctx.url.pathname === "/youtube") {
    return Response.redirect("https://youtube.de/@GermanITSkills", 301);
  }

  if (ctx.url.pathname.startsWith("/_image")) {
    return next();
  }

  const [, lang] = ctx.url.pathname.split("/");
  const isValidLanguage = lang in languages;

  const response = await next(
    isValidLanguage
      ? undefined
      : new URL(`/${defaultLang}${ctx.url.pathname}`, ctx.url),
  );

  if (response.status === 404) {
    return next(
      new URL(`/${isValidLanguage ? lang : defaultLang}/404`, ctx.url),
    );
  }

  return response;
});
