import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: 'https://blz-it.de',
  integrations: [astroI18next()],
});
