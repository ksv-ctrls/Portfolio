/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: '#020817', // Saturated Deep Blue
        'background-alt': '#051a3d', // Deeper Navy
        'background-subtle': '#1e1b4b', // Subtle Violet
        primary: {
          indigo: '#4f46e5', // Indigo 600
          violet: '#7c3aed', // Violet 600
          blue: '#2563eb', // Blue 600
        },
        glow: {
          teal: '#2dd4bf',
          green: '#10b981',
          blue: '#2563eb',
        }
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif'],
        'outfit': ['"Space Grotesk"', 'sans-serif'],
        'code': ['"Source Code Pro"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px #22d3ee' },
          '50%': { opacity: .5, boxShadow: '0 0 10px #9333ea' },
        },
        'aurora': {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        }
      }
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
