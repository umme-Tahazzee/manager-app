import type { Config } from "tailwindcss";

export default {
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
    },
    screens: {
      xs: "480px", // Extra small devices
      sm: "640px", // Small devices (default Tailwind)
      md: "768px", // Medium devices (default Tailwind)
      lg: "1024px", // Large devices (default Tailwind)
      xl: "1280px", // Extra large devices (default Tailwind)
      "2xl": "1536px", // 2x extra large devices (default Tailwind)
    },
  },
  plugins: [],
} satisfies Config;
