/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'monospace'],
      },
      colors: {
        border: 'var(--ifm-border-color)',
        background: 'var(--ifm-background-color)',
        foreground: 'var(--ifm-color-content)',
        muted: 'var(--ifm-color-content-secondary)',
      },
      maxWidth: {
        '6xl': '1152px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
