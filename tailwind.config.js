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
        // Header & brand (Figma: purple bar #6B38E3)
        header: {
          DEFAULT: '#6B38E3',
          hover: '#5a2fc7',
        },
        // Main backgrounds (Figma: #1B1D2C main, #212335 cards/inactive)
        surface: {
          DEFAULT: '#1B1D2C',
          elevated: '#1B1D2C',
          card: '#212335',
          bar: '#212335',
        },
        // Borders & dividers
        border: {
          DEFAULT: '#3a3a3a',
          muted: '#2a2a2a',
        },
        // Status & accents
        live: {
          DEFAULT: '#2ECC71',
          dim: '#26a85d',
        },
        finished: {
          DEFAULT: '#E74C3C',
          dim: '#c0392b',
        },
        // Text
        muted: '#9ca3af',
        // Legacy/alias
        primary: '#6B38E3',
        'primary-hover': '#5a2fc7',
        secondary: '#00FFA5',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'page-title': ['1.5rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        'league': ['0.9375rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        'team': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'score': ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        'status': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        'tab': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
      },
      spacing: {
        'header': '4rem',   // 64px
        'header-sm': '3.5rem', // 56px
        'card-px': '1rem',
        'card-py': '0.75rem',
        'section-gap': '1.5rem',
        'status-bar': '4px',
      },
      borderRadius: {
        card: '12px',
        'card-sm': '8px',
        button: '8px',
        pill: '9999px',
        tab: '8px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.2)',
      },
    },
  },
  plugins: [],
}
