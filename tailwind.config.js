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
        ink: {
          DEFAULT: '#0a0908',
          2: '#14120f',
          3: '#1d1a16',
        },
        bone: {
          DEFAULT: '#e8e4dc',
          2: '#d8d2c6',
        },
        smoke: {
          DEFAULT: '#8f887b',
          dim: '#56514a',
        },
        wine: {
          DEFAULT: '#7d1f2e',
          bright: '#a32639',
          readable: '#d65d72',
        },
        gold: {
          DEFAULT: '#b4924c',
        },
      },
      fontFamily: {
        display: ['"Archivo"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
