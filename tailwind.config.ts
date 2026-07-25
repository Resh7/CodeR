import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#061426",
        ink: "#081C33",
        steel: "#718096",
        electric: "#1D8CFF",
        silver: "#D8E1EA"
      },
      boxShadow: {
        premium: "0 30px 80px rgba(1, 12, 28, 0.18)",
        glow: "0 0 45px rgba(29, 140, 255, 0.28)"
      }
    }
  },
  plugins: []
} satisfies Config;
