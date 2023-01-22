/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "de",
  locales: ["de", "en"],
  load: ["client", "server"],

  /** Workaround for for leading '/' in path. Will be fixed in next release.
   * @see https://github.com/yassinedoghri/astro-i18next/issues/79
   */
  i18nextServer: {
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
};
