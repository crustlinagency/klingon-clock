/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          300: '#FFD700', // Brighter yellow for better contrast on black
        },
        red: {
          500: '#EF4444', // Red for second hand
        },
        black: {
          DEFAULT: '#000000',
        },
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      spacing: {
        // 8px spacing system
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '12': '96px',
      }
    },
  },
  plugins: [],
};