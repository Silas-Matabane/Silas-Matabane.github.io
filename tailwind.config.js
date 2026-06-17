/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#060810',
        'glass': 'rgba(10, 16, 30, 0.60)',
        'glass-hover': 'rgba(14, 22, 40, 0.70)',
        'border-glass': 'rgba(255, 255, 255, 0.08)',
        'border-bright': 'rgba(255, 255, 255, 0.14)',
        'text-base': 'rgba(242, 249, 255, 0.98)',
        'text-sub': 'rgba(200, 218, 240, 0.92)',
        'text-muted-c': 'rgba(160, 180, 210, 0.82)',
        'accent-gold': '#d4a853',
        'accent-gold-dim': 'rgba(212, 168, 83, 0.18)',
        'accent-gold-border': 'rgba(212, 168, 83, 0.30)',
        'accent-blue': '#4f9cf9',
        'accent-blue-dim': 'rgba(79, 156, 249, 0.15)',
        'accent-blue-border': 'rgba(79, 156, 249, 0.28)',
        'surface-1': 'rgba(255, 255, 255, 0.04)',
        'surface-2': 'rgba(255, 255, 255, 0.07)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        accent: ['"Fleur De Leah"', 'cursive'],
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        DEFAULT: '16px',
        lg: '24px',
      },
      boxShadow: {
        glass: '0 2px 8px rgba(0,0,0,0.45), 0 16px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)',
        'glass-hover': '0 4px 16px rgba(0,0,0,0.55), 0 24px 64px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.11)',
        card: '0 1px 4px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.35), 0 32px 72px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.65), 0 16px 40px rgba(0,0,0,0.42), 0 40px 80px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.12)',
        'glow-gold': '0 8px 28px rgba(212, 168, 83, 0.35)',
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 9s ease infinite',
        morph: 'morph 8s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'scroll-wheel': 'scrollWheel 2s ease-in-out infinite',
        'panel-fade': 'panelFadeIn 400ms cubic-bezier(0.4,0,0.2,1) forwards',
        'blob-1': 'blobFloat1 18s ease-in-out infinite alternate',
        'blob-2': 'blobFloat2 22s ease-in-out infinite alternate',
        equalizer: 'equalizerPulse 1.2s ease-in-out infinite',
        'draw-line': 'drawLine 2.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'candle-grow': 'candleGrow 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
        'pulse-ring': 'pulseRing 2.2s cubic-bezier(0.4,0,0.2,1) infinite',
        'scroll-track': 'scrollRight 8s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 30% 60% 40% / 70% 40% 50% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
        scrollWheel: {
          '0%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '100%': { opacity: '0', transform: 'translateX(-50%) translateY(12px)' },
        },
        panelFadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blobFloat1: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(80px, 60px) scale(1.15)' },
        },
        blobFloat2: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-60px, -80px) scale(1.2)' },
        },
        equalizerPulse: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        drawLine: {
          to: { strokeDashoffset: '0' },
        },
        candleGrow: {
          to: { transform: 'scaleY(1)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.82)', opacity: '0' },
          '50%': { transform: 'scale(1.14)', opacity: '0.38' },
          '100%': { transform: 'scale(1.28)', opacity: '0' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
