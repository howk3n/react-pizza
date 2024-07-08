/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono, monospace', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        huge: ['10rem', { lineHeight: '1' }],
      },
      height: {
        // more modern full height
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
