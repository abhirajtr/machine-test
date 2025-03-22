/** @type {import('tailwindcss').Config} */
import { BREAKPOINTS } from "./src/constants/styles";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--ant-color-primary)",
        success: "var(--ant-color-success)",
        warning: "var(--ant-color-warning)"
      },
      screens: {
        xs: `${BREAKPOINTS.xs}px`,
        // => @media (min-width: 480px) { ... }
        sm: `${BREAKPOINTS.sm}px`,
        // => @media (min-width: 576px) { ... }
        md: `${BREAKPOINTS.md}px`,
        // => @media (min-width: 768px) { ... }
        lg: `${BREAKPOINTS.lg}px`,
        // => @media (min-width: 992px) { ... }
        xl: `${BREAKPOINTS.xl}px`,
        // => @media (min-width: 1200px) { ... }
        xxl: `${BREAKPOINTS.xxl}px`
        // => @media (min-width: 1600px) { ... }
      }
    }
  },
  plugins: []
};
