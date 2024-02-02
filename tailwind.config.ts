import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
      center: true,
      
      screens: {
        sm: '720px',
        md: '960px',
        lg: '1140px',
        xl: '1320px',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-primary":  "linear-gradient(to right, #00B0DC, #2c3842)",
      },
      fontSize: {
        biggest_font_size: "2rem",
        normal_font_size: "1rem",
        small_font_size: "0.813rem",
        smaller_font_size: "0.75rem",
      },
      fontWeight: {
        titleBold: "var(--titleBold)",
        PRegular: "var(--PRegular)",
        Bold: "var(--Bold)",
        medium: "var(--medium)",
        ExtraBold: "(--ExtraBold)",
      },
      fontFamily: {
        Montserrat: ["var(--montserrat)", ...defaultTheme.fontFamily.sans],
        Inter: ["var(--inter)", ...defaultTheme.fontFamily.sans],
      },
      
      colors: {
        primary: "#00B0DC",
        sec: "#E5E6E6",
        orange: "#f86425",
        dark_blue: "#092742",
        sec_dark_blue: "#131a20",
        grey: "#2c3842",
        body_clr: "#141414",
      },
    },
  },
  plugins: [],
};
export default config;
