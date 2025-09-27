import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
    brand: {
      DEFAULT: "#0E6FD6",
      dark: "#0A4FA5",
      light: "#8CC8FF"
    }
  }
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
} satisfies Config
