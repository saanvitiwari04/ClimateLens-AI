import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        isro: {
          50: "#e7edf6",
          100: "#c3d3e8",
          500: "#0b3d91",
          700: "#07265b",
          900: "#041430"
        },
        saffron: {
          50: "#fff8f0",
          100: "#ffedd6",
          500: "#ff9933",
          700: "#cc7a29",
          900: "#804c1a"
        },
        success: {
          50: "#eaf2eb",
          100: "#cadbcd",
          500: "#2e7d32",
          700: "#1d4f20",
          900: "#112e13"
        },
        climate: {
          ink: "#0f172a",
          muted: "#64748b",
          line: "#e2e8f0",
          bg: "#f5f7fa",
          panel: "#ffffff"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-space)", "monospace"]
      },
      boxShadow: {
        panel: "0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",
        premium: "0 10px 25px -5px rgba(11, 61, 145, 0.1), 0 8px 10px -6px rgba(11, 61, 145, 0.1)"
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      }
    }
  },
  plugins: []
};

export default config;
