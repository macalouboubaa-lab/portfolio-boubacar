/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        roven: {
          bg: '#0A1628',
          card: '#1A2A3A',
          border: '#243447',
          text: '#F5F5F5',
          'text-secondary': '#8A9BA8',
          gold: '#D4AF37',
          'gold-light': '#E8C65A',
          input: '#1A2A3A',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        roven: '0 8px 32px rgba(0, 0, 0, 0.4)',
        'roven-gold': '0 4px 20px rgba(212, 175, 55, 0.2)',
        'roven-gold-hover': '0 4px 30px rgba(212, 175, 55, 0.4)',
      },
      borderRadius: {
        'roven': '1rem',
        'roven-lg': '1.5rem',
      },
    },
  },
  plugins: [],
};
