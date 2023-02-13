/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // THEME 1
        color1: " hsl(222, 26%, 31%)",
        color2: "hsl(223, 31%, 20%)",
        color3: " hsl(224, 36%, 15%)",
        color4: "hsl(225, 21%, 49%) ",
        color5: "hsl(224, 28%, 35%)",
        color6: " hsl(6, 63%, 50%)",
        color7: "hsl(6, 70%, 34%)",
        color8: "hsl(30, 25%, 89%)",
        color9: "hsl(28, 16%, 65%)",
        color10: "hsl(221, 14%, 31%)",
        color11: "hsl(0, 0%, 100%)",
        // THEME2
        // color12: " ",
        // color13: " ",
        // color14: " ",
        // color15: " ",
        // color16: " ",
        // color17: " ",
        // color18: " ",
        // color19: " ",
        // color20: " ",
        // color21: " ",
        // color22: " ",
      },
      fontFamily: {
        sans: ["Outfit"],
      },
    },
  },
  plugins: [],
};
