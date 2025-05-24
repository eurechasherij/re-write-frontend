import { heroui } from "@heroui/theme";
import path from "path";

const heroUIThemePath = path.dirname(require.resolve("@heroui/theme/"));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    `${heroUIThemePath}/**/*.{js,ts,jsx,tsx,mdx}`,
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
