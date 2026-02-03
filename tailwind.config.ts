import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './styles/**/*.{css}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        accent: '#8B5CF6',
        bgLight: '#FFFFFF',
        bgDark: '#0F172A',
        textLight: '#1E293B',
        textDark: '#F1F5F9'
      },
      spacing: {
        '6': '1.5rem'
      },
      maxWidth: {
        container: '1280px'
      }
    }
  },
  plugins: []
};

export default config;
