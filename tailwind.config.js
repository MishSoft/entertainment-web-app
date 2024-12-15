/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#161D2F",
        background: "#10141E",
        linkColor: "#5A698F",
      },
    },
  },
  plugins: [],
};
