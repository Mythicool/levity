/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm breakfast house color palette
        cream: {
          50: '#fefdf8',
          100: '#fdf9e7',
          200: '#fbf2c4',
          300: '#f7e896',
          400: '#f1d865',
          500: '#e8c547',
          600: '#d4a72c',
          700: '#b08525',
          800: '#8f6a26',
          900: '#775724',
        },
        coffee: {
          50: '#f7f3f0',
          100: '#ede4db',
          200: '#dcc8b8',
          300: '#c7a690',
          400: '#b5886f',
          500: '#a8745c',
          600: '#9b6551',
          700: '#815345',
          800: '#69453c',
          900: '#563a32',
        },
        warmBrown: {
          50: '#f6f3f0',
          100: '#e9e1d8',
          200: '#d4c2b0',
          300: '#bb9d84',
          400: '#a67e63',
          500: '#8b6444',
          600: '#7a5539',
          700: '#654530',
          800: '#533a2a',
          900: '#453126',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
