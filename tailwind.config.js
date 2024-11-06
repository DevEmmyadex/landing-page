/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        verylightgray: "hsl(0,0%,98%)",
        bcolor: "#222F65",
        bgray: "#F0F0F0",
        vbcolor: "#091133",
        textcolor: "#505F98",
        maintext: "#37447e",
        butColor: "#111b47",
        priceColor: "#E7ECFF",
        footcol: "#c5d3e5",
        rec: "#CDD1D4",
        copy: "#939ea4",
        logo: "#b0b8bc",
      },
    },
  },
  plugins: [],
};
