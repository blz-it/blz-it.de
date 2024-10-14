import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "de",
  locales: ["de", "en"],
  load: ["client", "server"],
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};

export default config;
