/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./src/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    colors:{
      'primary':'#AC3E1F',
      'primary-10':'rgba(172, 62, 31, 0.1)',
      'gray-500':'#6B7280',
      'gray-900':'#111928',
      'gray-200':'#E5E7EB',
      'gray-400':'w#9CA3AF',
      'gray-300':'#D1D5DB',
      'gray-100':'#F3F4F6',
      'gray-50':'#F9FAFB',
      'white':'#FFFFFF',
      'green-100':'#DEF7EC',
      'green-800':'#03543F',
      'red-100':'#FDE8E8',
      'red-800':'#9B1C1C',
      'black':'#000000'
    },
    extend: {},
  },
  plugins: [],
}

