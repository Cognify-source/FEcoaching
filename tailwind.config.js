/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Exempel på egna färger
      colors: {
        primary: "#123456",
        secondary: "#abcdef"
      },
      // Exempel på egna typsnitt
      fontFamily: {
        serif: ["Merriweather", "serif"]
      }
    }
  },
  plugins: []
};
