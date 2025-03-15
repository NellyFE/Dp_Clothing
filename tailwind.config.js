/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    screens: {
      sm: '480px' ,
      md: '768px' ,
      lg: '976px' , 
      xl: '1440px' ,
          } ,
          extend: {

            fontSize: {
            xxs: '12px'
            },

            colors: {
              brightRed: 'hsla(12, 87.60%, 58.80%, 0.87)' ,
              brightshade: 'hsla(20, 90.20%, 60.00%, 0.12)' , 
              darkBlue: 'hsl(240, 61% , 22%)' ,
              veryDarkBlue: 'hsl(229, 88.90%, 10.60%)' ,
              veryLightGray: 'hsl(0, 0% , 98%)' ,
              brightRedLight: 'hsl(20, 90%, 60%)' ,
              brightRedSupLight: 'hsla(12, 98.70%, 70.80%, 0.54)',
              darkGrayishBlue: 'hsl(223, 24.50%, 43.10%)',
              veryLightGray: 'hsla(225, 7.40%, 89.40%, 0.39)'
            }
          },
  },
  plugins: [],
}

