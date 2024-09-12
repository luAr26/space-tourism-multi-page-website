/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ["blue-900"]: "var(--color-blue-900)",
      ["blue-300"]: "var(--color-blue-300)",
      white: "var(--color-white)",
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        tablet: "2.5rem",
        desktop: "4rem",
      },
    },
    fontSize: {
      ["preset-1"]: ["9rem", { lineHeight: "1.19375", letterSpacing: "0" }],
      ["preset-2"]: ["6.25rem", { lineHeight: "1.146", letterSpacing: "0" }],
      ["preset-3"]: ["3.5rem", { lineHeight: "1.146423", letterSpacing: "0" }],
      ["preset-4"]: ["2rem", { lineHeight: "1.146875", letterSpacing: "0" }],
      ["preset-5"]: ["1.75rem", { lineHeight: "1.2", letterSpacing: "4px" }],
      ["preset-6"]: ["1.75rem", { lineHeight: "1.146423", letterSpacing: "0" }],
      ["preset-7"]: ["0.875rem", { lineHeight: "1.2", letterSpacing: "2px" }],
      ["preset-8"]: ["1rem", { lineHeight: "1.2", letterSpacing: "2px" }],
      ["preset-9"]: ["1.25rem", { lineHeight: "1.8", letterSpacing: "0" }],
    },
    spacing: {
      1600: "128px",
      1200: "96px",
      1000: "80px",
      800: "64px",
      600: "48px",
      500: "40px",
      400: "32px",
      300: "24px",
      200: "16px",
      150: "12px",
      100: "8px",
      50: "4px",
      25: "2px",
    },
  },
  plugins: [],
};
export default config;
