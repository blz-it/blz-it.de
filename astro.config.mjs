import astroI18next from "astro-i18next";
import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://blz-it.de',
  integrations: [tailwind(), astroI18next(), react()]
});