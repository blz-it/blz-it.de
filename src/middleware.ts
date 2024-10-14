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
  if (!(lang in languages)) {
    return Response.redirect(
      new URL(`/${defaultLang}${ctx.url.pathname}`, ctx.url),
      301,
    );
  }

  const response = await next();

  if (response.status === 404) {
    return next(new URL(`/${lang}/404`, ctx.url));
  }

  return response;
});
