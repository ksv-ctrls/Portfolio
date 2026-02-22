/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020817', // Saturated Deep Blue
        'background-alt': '#051a3d', // Deeper Navy
        'background-subtle': '#1e1b4b', // Subtle Violet
        primary: {
          pink: '#f472b6',
          purple: '#a855f7',
          cyan: '#06b6d4',
        },
        glow: {
          teal: '#2dd4bf',
          green: '#10b981',
          blue: '#2563eb',
        }
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif'],
        'code': ['"Source Code Pro"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px #22d3ee' },
          '50%': { opacity: .5, boxShadow: '0 0 10px #9333ea' },
        }
      }
    },
  },
  plugins: [],
}
