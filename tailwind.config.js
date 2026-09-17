/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D71920',
          darkRed: '#A90812',
          charcoal: '#20252B',
          charcoalLight: '#2C323A',
          cream: '#FFF8ED',
          creamDark: '#F7EEDD',
          gray: '#F4F5F6',
          muted: '#626B75',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -5px rgba(32, 37, 43, 0.08), 0 4px 6px -2px rgba(32, 37, 43, 0.04)',
        'premium-hover': '0 20px 40px -10px rgba(215, 25, 32, 0.15), 0 10px 20px -5px rgba(32, 37, 43, 0.08)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
