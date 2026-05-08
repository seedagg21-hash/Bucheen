/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],

  theme: {
    extend: {
       colors: {
        primary: '#FF725E',          
        'primary-light': '#f8ccc6ff',
        'primary-soft': '#FFD0CA',   
        'card-purple': '#C4B5F4',    
        'card-yellow': '#F5E6B8',   
        'brand-purple': '#9181CC',  
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },

      boxShadow: {
        card: '0 4px 24px rgba(242,107,78,0.08)',
        nav: '0 2px 16px rgba(0,0,0,0.07)',
      },
    },
  },

  plugins: [],
}
