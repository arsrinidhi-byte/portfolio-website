/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: '#e6dbc7',
          surface: '#ddd0b9',
          light: '#f2ece0',
        },
        cobalt: {
          DEFAULT: '#062b8a',
          muted: '#3a5aa8',
          deep: '#031954',
        },
      },
      fontFamily: {
        display: ['"Red Hat Display"', 'sans-serif'],
        text: ['"Red Hat Text"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};

