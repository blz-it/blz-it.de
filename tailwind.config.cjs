/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wsg: {
          orange: {
            1000: "#fff6eb",
            900: "#ffdfb8",
            800: "#ffcb85",
            700: "#ffb552",
            600: "#ffa11f",
            500: "#ED8B00",
            400: "#b86c00",
            300: "#854e00",
            200: "#523000",
            100: "#1f1200"
          },
          gray: "#adadad",
        },
        wsi: {
          blue: {
            1000: "#66B8FF",
            900: "#33A1FF",
            800: "#008BFF",
            700: "#006ECC",
            600: "#005199",
            500: "#003764",
            400: "#001933",
            300: "#000305",
            200: "#000",
            100: "#000",
          },
          onBlue: "#fff",
        },
      },
    },
  },
  plugins: [],
};
