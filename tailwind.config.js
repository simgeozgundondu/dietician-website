/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf5fa',
          100: '#fdd8db',
          200: '#f7d5eb',
          300: '#f2c0e1',
          400: '#ecadd0',
          600: '#f69da5',
          500: '#f3b8be',
          700: '#f58c95',
          800: '#b0778c',
          900: '#9c6576',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#eae6e0',
          300: '#ddd7cd',
          400: '#c9bfb0',
          500: '#b5a896',
          600: '#9d8f7a',
          700: '#7f7364',
          800: '#685f53',
          900: '#564f46',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        meira: ['var(--font-meira)', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

