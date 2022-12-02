/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "de",
  locales: ["de", "en"],

  // workaround for for leading '/' in path
  // will be fixed in next release
  i18nextServer: {
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json"
    }
  }
};