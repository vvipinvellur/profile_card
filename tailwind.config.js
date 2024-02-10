const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      colors: {
        primary: '#0089f5',
      },
      screens: {
        'toggleScreen': '768px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
