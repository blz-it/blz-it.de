// @ts-check
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { isRegistrationEnabled } from "./src/config";
import { defaultLang, languages } from "./src/i18n/constants";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
  },
  integrations: [tailwind(), react(), icon()],
  site: "https://blz-it.de",
  redirects: {
    ...(isRegistrationEnabled ? {} : { "/de/anmeldung": "/" }),
    "/de/skill08": "/mobile-applications-development",
    "/de/skill09": "/software-applications-development",
    "/it-software-solutions-for-business": "/software-applications-development",
    "/en/it-software-solutions-for-business":
      "/en/software-applications-development",
  },
});
