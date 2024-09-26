import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: { width: { '25': string }; colors: { background: string; foreground: string }; height: { '30': string } }
  };
  content: string[]
} = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        '25': '25rem',
      },
      height: {
        '30': '30rem',
      }
    },
  },
  plugins: [],
};
export default config;
