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
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "ping-slow": "ping 8s linear infinite",
      },
    },
  },
  plugins: [],
};
