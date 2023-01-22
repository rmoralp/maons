/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier', 'monospace']
      },
      colors: ({colors}) => ({
        primary: colors.blue,
        secondary: colors.violet,
        tertiary: colors.yellow
      })
    }
  },
  plugins: []
}
