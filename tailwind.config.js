/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        "primary-blue": "#015FFC",
        "primary-dark": "#030213",
        primary: "#015FFC",
      },
      keyframes: {
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        flip: {
          "0%": { transform: "rotateX(90deg)", opacity: "0" },
          "50%": { transform: "rotateX(-20deg)", opacity: "1" },
          "100%": { transform: "rotateX(0deg)", opacity: "1" },
        },
      },
      animation: {
        caret: "caret 1s step-end infinite",
        flip: "flip 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
