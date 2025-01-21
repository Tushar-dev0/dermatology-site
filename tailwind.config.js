/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
        poppins: ['Poppins', 'sanss-serif']
     },
      colors: {
        primary: "#4CB9A1",
        secondary: "#38A3A5",
        tertiary: "#66BDC5", 
      },
    },
  },
  plugins: [],
};
