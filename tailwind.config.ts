import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-default":
          "linear-gradient(180deg, rgba(66, 66, 66, 0) 0%, rgba(66, 66, 66, 0.5) 86.98%)",
      },
      fontSize: {
        small: ["12px", "14.63px"],
      },
    },
  },
  plugins: [],
};
export default config;
