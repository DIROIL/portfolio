/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-primary': '#a8dadc',
        'dark-primary': '#457b9d',
        'light-bg': '#f0f4f8',
        'dark-bg': '#1d3557',
        'light-text': '#1d3557',
        'dark-text': '#f0f4f8',
      },
    },
  },
  plugins: [],
};