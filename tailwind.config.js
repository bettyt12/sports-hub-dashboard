/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme – adjust to match Figma
        surface: {
          DEFAULT: '#0f0f0f',
          elevated: '#1a1a1a',
          card: '#161616',
        },
        border: {
          DEFAULT: '#2a2a2a',
          muted: '#222',
        },
        primary: '#e11d48',
        'primary-hover': '#be123c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        button: '8px',
      },
    },
  },
  plugins: [],
}
