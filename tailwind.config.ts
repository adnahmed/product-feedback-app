import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: '768px',
        mobile: '375px',
        desktop: '1440px'
      },
      colors: {
        blue: "#4661e6",
        "blue-light": "#62bcfa",
        "blue-lighter": "#cfd7ff",
        "blue-lightest": "#f2f4ff",
        purple: "#ad1fea",
        "orange-light": "#f49f85",
        "gray-dark": "#647196",
        gray: "#f2f4ff",
        "gray-light": "#f7f8fd",
        "blue-dark-1": "#4661e6",
        "blue-dark-2": "#3a4374",
        red: "#d73737",
      },
      fontFamily: {
        sans: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
export default config;
