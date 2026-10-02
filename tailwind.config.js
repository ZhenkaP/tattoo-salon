/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blinker: ["Blinker", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        boldonse: ["Boldonse", "sans-serif"],
      },
      colors: {
        "bg-main": "#FFE2B0",
        "accent-red": "#F15B40",
      },
    },
  },
  plugins: [],
};
