/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'allmond-light-blue': {
          50: '#f4f7fc',
          100: '#dfe8f6',
          200: '#c9d8f0',
          300: '#bed0ec',
          400: '#a9c1e6',
          500: '#93b1e0',
          600: '#9eb9e3',
          700: '#7a99cd',
          800: '#6789c3',
          900: '#93b1e0'
        },
        'allmond-green': {
          50: '#f6fbf6',
          100: '#eef6ef',
          200: '#dcefd6',
          300: '#cbe8c1',
          400: '#b9e0ad',
          500: '#a8d898',
          600: '#b1dca2',
          700: '#9ecd8d',
          800: '#8cbe7a',
          900: '#a8d898'
        },
        'allmond-red': {
          50: '#fef4f4',
          100: '#fdeaeb',
          200: '#f9aaae',
          300: '#f9b5b8',
          400: '#fabfc2',
          500: '#fbcacd',
          600: '#fbcacd',
          700: '#fcd5d7',
          800: '#fdeaeb',
          900: '#f7959a'
        },
        'allmond-dark-blue': {
          50: '#e6e8ec',
          100: '#cdd1d8',
          200: '#b5bac5',
          300: '#9ca3b1',
          400: '#838c9e',
          500: '#6a748b',
          600: '#515d77',
          700: '#394664',
          800: '#202f50',
          900: '#07183d'
        }
      }
    },
  },
  plugins: [],
}