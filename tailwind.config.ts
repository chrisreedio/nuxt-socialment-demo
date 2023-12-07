import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#f0f8ff',
          100: '#e0effe',
          200: '#b9e0fe',
          300: '#7cc7fd',
          400: '#36acfa',
          500: '#0c91eb',
          600: '#0078d4',
          700: '#015aa3',
          800: '#064d86',
          900: '#0b416f',
          950: '#07294a',
        },
      },
    },
  },
}
