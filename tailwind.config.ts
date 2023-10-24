import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
      quaternary: 'var(--color-quaternary)',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      light: 'var(--color-light)',
      error: 'var(--color-error)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '350px',
      },
      borderColor: {
        'transparent': 'transparent',
      },
      spacing: {
        '18': '72px',
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
}
export default config
