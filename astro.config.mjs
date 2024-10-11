// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { defaultLang, languages } from "./src/i18n/constants";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
  },
  integrations: [tailwind()],
});
