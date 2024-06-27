/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC7F00",
        secondary: "#8C8C8C",
        lGreen: "#ECF1F1",
        lOrange: "#FFF2E6",
      
      },
      fontFamily: {
        Nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
