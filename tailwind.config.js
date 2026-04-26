/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',         // deep black (text + dark sections)
        bone: '#F5F5F5',        // off-white (text on dark bg)
        cream: '#FAFAF7',       // warm white (light section bg)
        wire: '#1A1A1A',        // dark borders
        mute: '#E8E2D5',        // light borders for cream sections
        k2: '#FFD60A',          // K2 yellow accent
      },
      fontFamily: {
        display: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'punch': '0.02em',
        'wider2': '0.18em',
      },
      transitionTimingFunction: {
        'heavy': 'cubic-bezier(0.83, 0, 0.17, 1)',
        'bag': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '20%': { transform: 'translate(-15%,5%)' },
          '30%': { transform: 'translate(7%,-25%)' },
          '40%': { transform: 'translate(-5%,25%)' },
          '50%': { transform: 'translate(-15%,10%)' },
          '60%': { transform: 'translate(15%,0)' },
          '70%': { transform: 'translate(0,15%)' },
          '80%': { transform: 'translate(3%,35%)' },
          '90%': { transform: 'translate(-10%,10%)' },
        },
        slowDrift: {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.05) translateY(8px)' },
        },
      },
      animation: {
        grain: 'grain 8s steps(10) infinite',
        drift: 'slowDrift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
