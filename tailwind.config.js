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
          bg: '#0d1117',
          card: '#161b22',
          border: '#30363d',
          text: '#e6edf3',
          'text-secondary': '#8b949e',
          cyan: '#06b6d4',
          'cyan-light': '#22d3ee',
          input: '#161b22',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        roven: '0 8px 32px rgba(0, 0, 0, 0.4)',
        'roven-cyan': '0 4px 20px rgba(6, 182, 212, 0.2)',
        'roven-cyan-hover': '0 4px 30px rgba(6, 182, 212, 0.4)',
      },
      borderRadius: {
        'roven': '1rem',
        'roven-lg': '1.5rem',
      },
    },
  },
  plugins: [],
};
