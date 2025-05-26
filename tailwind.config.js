/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': {
          50: '#f0f7ff',
          100: '#e0f0ff',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'cyan': {
          400: '#22d3ee',
        },
        'indigo': {
          900: '#312e81',
        }
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};