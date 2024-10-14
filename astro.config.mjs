import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blz-it.de",
  integrations: [tailwind(), astroI18next(), react()],
});
