/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#5485b6',
        'green': '#4a9659',
        'lightgreen': '#acf595',
        'dark': '#0c191d',
        'gray': '#252529',
        'ice': '#f1f4f9',
    },
    fontFamily: {
      'opensans': ['Open Sans', 'sans-serif'],
    },
    
  },
  plugins: [],
}
}
