import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        dark: '#282a36',
        darkGray: '#bdc3d0',
        github: '#21262d',
        background: '#f0f1f3',
        greenGT: '#238636',
        backlog: '#f3efe1',
        toDo: '#eebed6',
        inProcess: '#e7dcf6',
        done: '#deefe6',
        shadowBlue: '#e0e8f6',
      },
      colors: {
        backlog: '#f19e19',
        toDo: '#e587b3',
        inProcess: '#c599ef',
        done: '#71c491',
        darkGray: '#bdc3d0',
        shadowBlue: '#4989f2',
      },
    },
  },
  plugins: [],
}
export default config
