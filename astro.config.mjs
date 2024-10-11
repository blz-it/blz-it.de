// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/constants";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: defaultLocale.lang,
    locales: Object.keys(locales),
  },
  integrations: [tailwind()],
});
