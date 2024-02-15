/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#2C2C2C',
          darker: '#000000',
        },
        gray: '#222222',
        lightGray: '#E0E0E0',
        darkGray: '#1B1B1B',
      },
      boxShadow: {
        custom: '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 0.5turn at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
