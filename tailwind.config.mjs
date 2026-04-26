/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'DM Sans',
          'Noto Sans JP',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'Outfit',
          'Noto Sans JP',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        surface: {
          50: 'oklch(0.99 0.004 255)',
          100: 'oklch(0.97 0.008 255)',
          200: 'oklch(0.94 0.012 255)',
        },
        brand: {
          400: 'oklch(0.72 0.14 200)',
          500: 'oklch(0.55 0.14 200)',
        },
        accent: {
          500: 'oklch(0.6 0.18 300)',
        },
      },
    },
  },
  plugins: [],
};
