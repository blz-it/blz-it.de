// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { defaultLang, languages } from "./src/i18n/constants";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [tailwind(), react()],
});