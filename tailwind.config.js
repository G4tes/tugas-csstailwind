/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        // Main Cols
        gezel: "#7EAAC8",
        gezel2: "#486A90",
        botred: "#c9574e",
        myst_main: "#d94d49",
        myst_dark: "#8c312f",
        //   BG and asset Cols
        bg: "#111f29",
        navnav: "#1d2225",
        gray1: "#24292e",
        gray2: "#1f2428",
        main: "#183748",
        main_grey: "#232323",
        off_white: "#EBEBEB",
        nav_bar: "#141414",
        // Misc Cols
        input: "#404040",
        discord: "#5165F6",
        discord2: "#3244C9",
        warship: "#abf6ff",
        // Portfolio Cols
        portfolio_main_col: "var(--portfolio_main_col)",
        portfolio_main_text: "var(--portfolio_text_col)",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
