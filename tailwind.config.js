// NextWave.au - Tailwind CSS Configuration
// This file configures the Tailwind CSS framework for the NextWave website

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Primary color - Deep Blue
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#0B63E5', // Main primary color
        },
        // Secondary color - Teal
        secondary: {
          50: '#e6fff9',
          100: '#ccfff4',
          200: '#99ffe8',
          300: '#66ffdd',
          400: '#33ffd1',
          500: '#00ffc6',
          600: '#00cc9e',
          700: '#009977',
          800: '#00664f',
          900: '#00D4A0', // Main secondary color
        },
        // Accent color - Coral
        accent: {
          500: '#FF6B35', // Main accent color
        },
        // Neutral colors
        neutral: {
          900: '#1A2B3C', // Dark Blue-Gray for text and dark mode backgrounds
          50: '#F7F9FC', // Off-White for backgrounds and light mode
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Source Sans Pro', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'waves-pattern': "url('/images/backgrounds/waves-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.900'),
            a: {
              color: theme('colors.primary.900'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            h1: {
              color: theme('colors.neutral.900'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.neutral.900'),
              fontWeight: '700',
            },
            h3: {
              color: theme('colors.neutral.900'),
              fontWeight: '600',
            },
            h4: {
              color: theme('colors.neutral.900'),
              fontWeight: '600',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.neutral.50'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            h1: {
              color: theme('colors.neutral.50'),
            },
            h2: {
              color: theme('colors.neutral.50'),
            },
            h3: {
              color: theme('colors.neutral.50'),
            },
            h4: {
              color: theme('colors.neutral.50'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
