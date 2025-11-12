/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
