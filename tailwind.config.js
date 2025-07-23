/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'neutral-light': 'var(--neutral-light)',
        'neutral-dark': 'var(--neutral-dark)',
        'neutral-medium': 'var(--neutral-medium)',
      }
    },
  },
  plugins: [],
}
