/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./standalone-preview.html"
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030408',
          900: '#06070E',
          850: '#090C1B',
          800: '#0E1329',
          700: '#151C3B',
          600: '#1D2752'
        },
        glow: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          indigo: '#6366F1'
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.35)',
        'glow-md': '0 0 30px rgba(59, 130, 246, 0.45)',
        'glow-lg': '0 0 50px rgba(59, 130, 246, 0.55)',
        'glow-purple': '0 0 35px rgba(139, 92, 246, 0.45)',
        'glow-cyan': '0 0 35px rgba(6, 182, 212, 0.45)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'beam-drift': 'beamDrift 8s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite linear'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        beamDrift: {
          '0%': { opacity: '0.6', transform: 'rotate(-42deg) translateY(-2%)' },
          '100%': { opacity: '0.85', transform: 'rotate(-45deg) translateY(2%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
}
