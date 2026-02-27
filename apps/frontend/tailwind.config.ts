import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        miseco: {
          DEFAULT: '#D32F2F',
          soft: '#FDE9E9',
        },
        neutral: {
          bg: '#F6F7FB',
          card: '#FFFFFF',
          border: '#E6E8EF',
        },
      },
    },
  },
  plugins: [],
};

export default config;
