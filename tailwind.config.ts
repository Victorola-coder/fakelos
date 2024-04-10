import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', "sans-serif"],
        clash: ["clash", "sans-serif"],
        clashbold: ["clashBold", "sans-serif"]
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1220px",
        xxl: "1400px",
      },
    },
    },
  },
  plugins: [],
};
export default config;
