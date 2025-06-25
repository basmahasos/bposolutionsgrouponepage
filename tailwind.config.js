/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F28333',
        'secondary': '#53687A',
        'black': '#000000',
        'white': '#ffffff',
        'light': '#F8F9FA',
        'light-100': '#F9F9FB',
        'black-200': '#272727',
        'black-300': '#383838',
        'black-400': '#333333',
        'black-500': '#1A1932',
        'danger': '#E44545',
        'gray': '#cccccc',
      },
      fontFamily: {
        'body': '"Montserrat", sans-serif',
        'heading': 'Gilroy-ExtraBold', 
      },
      fontSize: {
        '28': '1.75rem',
        '32': '2rem',
        '40': '2.5rem',
        '44': '2.75rem',
        '50': '3.125rem',
        '55': '3.4375rem',
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        'full': '100%',
      },
      spacing: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.75rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        '0.15': '0.15px',
        '1': '1px',
      },
      boxShadow: {
        '32': '0px 32px 32px 0px #808C9733',
      }
    },
  },
  plugins: [],
}