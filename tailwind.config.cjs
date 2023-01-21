/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
            100: "#1f1200",
          },
          gray: "#adadad",
        },
        wsi: {
          blue: {
            1000: "#CCE5FF",
            900: "#99D0FF",
            800: "#66B8FF",
            700: "#33A1FF",
            600: "#008BFF",
            500: "#006ECC",
            400: "#005199",
            300: "#003764",
            200: "#001933",
            100: "#000305",
          },
          onBlue: "#fff",
        },
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
    },
  },
  plugins: [],
};
