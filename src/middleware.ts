import { defineMiddleware } from "astro:middleware";
import { defaultLang, languages } from "./i18n";

export const onRequest = defineMiddleware(async (ctx, next) => {
  if (ctx.url.pathname === "/youtube") {
    return Response.redirect("https://youtube.de/@GermanITSkills");
  }

  const [, lang] = ctx.url.pathname.split("/");
  if (!(lang in languages)) {
    return Response.redirect(
      new URL(`/${defaultLang}${ctx.url.pathname}`, ctx.url),
    );
  }

  const response = await next();

  if (response.status === 404) {
    return Response.redirect(new URL(`/${lang}/not-found`, ctx.url));
  }

  return response;
});
