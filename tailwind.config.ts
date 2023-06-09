const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      
      animation: {
        "fade-up": "fade-up 1.75s ease-in-out",
        "light-up": "light-up 3s ease-in-out",
        "light-down":"light-down 3s ease-in-out",
        "stretch": "stretch 3s",
        "background-pan": "background-pan 2s",
        "fadeIn": 'fadeIn 5s',
        "rotate": 'rotate 50s linear',
        "grow": 'grow 20s ease-in-out infinite',
      },
      keyframes: {
        "rotate": {
          '5%': { transform: 'rotate(30deg)', opacity:0 },
          '10%': { transform: 'rotate(90deg)', opacity:0.2 },
        },
        "grow": {
          '0%': { opacity: 0.2,transform: '' },
          '50%': { opacity: 0.17 },
          '100%': { opacity: 0.2, transform: 'rotate(-90deg)' },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(5%)" },
          "50%": { opacity: 0, transform: "translateY(5%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "light-up": {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.2 },
        },
        "light-down": {
          "0%": { opacity: 0.2 },
          "100%": { opacity: 0 },
        },
        stretch: {
          "0%": { padding: "0.5rem 1rem" },
          "40%": { padding: "0.5rem 1rem" },
          "50%": { padding: "0.5rem 0.5rem" },
          "65%": { padding: "0.5rem 4rem" },
          "75%": { padding: "0.5rem 4rem" },
          "100%": { padding: "0.5rem 1rem" },
        },
        "background-pan": {
          "0%": {
            "background-position": "100% 100%",
            opacity: 0,
          },
          "100%": {
            "background-position": "0% 0%",
            opacity: 100,
          },
        },
        "fadeIn": {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      borderWidth: {
        1: "1.5px",
      },
      backgroundColor: {},
      fontSize: {
        "2xs": "0.9rem",
      },
      opacity: {
        15: "0.15",
      },
      boxShadow: {
        card: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      backgroundSize: {
        "400%": "370% 370%",
      },
    },
    variants: {
      extend: {
        animation: ["motion-safe"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
