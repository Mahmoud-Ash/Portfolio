/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        bg1: "rgb(var(--bg1))",
        bg2: "rgb(var(--bg2))",
        bg3: "rgb(var(--bg3))",
        bg4: "rgb(var(--bg4))",
        gradient: "rgb(var(--gradient))",
      },
    },
  },
  plugins: [],
};
