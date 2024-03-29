/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        BrightBlue: 'hsl(220, 98%, 61%)',
        CheckBackground: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        DarkGrayishBlue:' hsl(236, 9%, 61%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        VeryDarkBlue: 'hsl(235, 21%, 11%)',
        VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        LightGrayishBlue: 'hsl(234, 39%, 85%)',
        LightGrayishBlueHover: 'hsl(236, 33%, 92%)',
        DarkGrayishBlue: 'hsl(234, 11%, 52%)',
        VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        VeryDarkGrayishBlue: 'hsl(237, 14%, 26%)',
      },

      fontFamily: {
        Josefin: 'Josefin Sans, sans-serif'
      },

      backgroundImage: {
        'mobile-light': "url('./src/assets/bg-mobile-light.jpg')",
        'desktop-light': "url('./src/assets/bg-desktop-light.jpg')",
        'mobile-dark': "url('./src/assets/bg-mobile-dark.jpg')",
        'desktop-dark': "url('./src/assets/bg-desktop-dark.jpg')"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

