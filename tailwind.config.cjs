/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,tsx,ts}'],
  darkMode: 'media',

  theme: {
    colors: {
      vulcan: '#0C0E16',
      haze: '#D1D3E4',
      amaranth: '#EE2F46',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
    fontSize: {
      'display-large': ['6rem', '6.5rem'],
      'display-medium': ['5.5rem', '6rem'],
      'display-small': ['3rem', '3.5rem'],
      'heading-large': ['3rem, 3.5rem'],
      'heading-medium': ['2.5rem', '3rem'],
      'heading-small': ['2rem', '2.5rem'],
      'title-large': ['2rem', '2.25rem'],
      'title-medium': ['1.5rem', '1.75rem'],
      'title-small': ['1.25rem', '1.5rem'],
      'body-large': ['1.25rem', '1.5rem'],
      'body-medium': ['1rem', '1.25rem'],
      'body-small': ['0.875rem', '1.125rem'],
      'caption-large': ['0.875rem', '1rem'],
      'caption-medium': ['0.75rem', '0.875rem'],
      'caption-small': ['0.625rem', '0.75rem'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
