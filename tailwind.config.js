/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Main Canvas & Surfaces ─────────────────────────
        cream:          '#F7F1EB',
        background:     '#F7F1EB',
        'warm-white':   '#FCF9F5',
        surface:        '#FCF9F5',
        'soft-rose':    '#F0DCD9',
        'soft-blue':    '#D9E4EF',
        border:         '#E8DFD8',

        // ── Primary Burgundy Identity ──────────────────────
        burgundy:       '#7A1822',
        'deep-burgundy':'#5A1018',
        'dark-text':    '#211C1D',
        foreground:     '#211C1D',
        'muted-text':   '#70676A',

        // ── Secondary Colors ───────────────────────────────
        plum:           '#24112F', // Dark Plum / Deep Purple
        'dusty-rose':   '#E7C9C7', // Dusty Rose
        lavender:       '#C9B8D8', // Lavender
        'muted-blue':   '#9BB6D3', // Muted Blue
        gold:           '#D5B36A', // Warm Gold Highlight
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif'],
        'code':    ['"Source Code Pro"', 'monospace'],
      },
      boxShadow: {
        'card-soft':    '0 10px 30px rgba(33, 28, 29, 0.06), 0 2px 8px rgba(122, 24, 34, 0.03)',
        'card-elevated':'0 16px 40px rgba(33, 28, 29, 0.12), 0 4px 12px rgba(90, 16, 24, 0.06)',
        'contact-depth':'0 24px 60px rgba(33, 28, 29, 0.14), 0 8px 24px rgba(90, 16, 24, 0.08)',
      }
    },
  },
  plugins: [addVariablesForColors],
}

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
