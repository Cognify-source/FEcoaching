/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#123456",
        secondary: "#abcdef"
      },
      fontFamily: {
        serif: ["Merriweather", "serif"]
      }
    }
  },
  plugins: []
};
