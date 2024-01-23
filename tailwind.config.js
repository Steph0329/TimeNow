/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ['Inter', 'sans-serif']
    },
    colors: {
      blue: {
        50: '#4065b4',
        100: '#2c2775',
        200: '#1f1a66',
      },
      celeste:'#47ccdf',
      celesteClaro: '#cef9ff',
      green: '#3d737b',
      greenO: '#05525e',
      white: '#FFFFFF',
      gray: '#616878',
      gray50: '#e7e7e7'
    }
  },
  plugins: [],
}

