import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-gray": "#F6F6F6",
        "custom-violet": "#8A33FD",
        "custom-slate": "#66666640",
        "custom-lightgray": "#807D7E",
        "custom-darkgray": "#3C4242",
        "button-gray": "#404040",
      },
    },
  },
  plugins: [],
};
export default config;
