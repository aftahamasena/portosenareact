/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gloock: ["Gloock", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
        lora: ["Lora", "serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
