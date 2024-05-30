/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#FFF5E0",
        pinkColor: "#FF6969",
        redColor: "#C70039",
        blueColor: "#141E46",
      }
    },
  },
  plugins: [],
};
