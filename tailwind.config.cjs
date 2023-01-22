/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        wsg: {
          orange: "#ed8a00",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
