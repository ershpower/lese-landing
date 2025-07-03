/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': 'rgba(248, 248, 255, 1)',
        'dark-blue': 'rgba(40, 69, 120, 1)',
        blue: 'rgba(63, 105, 192, 1)',
        'white-70': 'rgba(255, 255, 255, 0.7)',
      },
      backgroundImage: {
        'light-gradient':
          'radial-gradient(85.84% 85.9% at 28.75% 14.1%, rgba(223, 233, 245, 0.5) 31.73%, rgba(186, 206, 239, 0.5) 72.75%, rgba(175, 200, 249, 0.5) 86.9%, rgba(154, 188, 255, 0.5) 100%)',
        'dark-gradient':
          'radial-gradient(103.21% 103.21% at 0% -3.21%, #9FC5EE 0%, #477BCD 29.19%, #1B1B84 65.98%, #09094B 94.23%)',
        'attention-gradient':
          'linear-gradient(119.12deg, #EFF5FF 7.07%, #C7E0FF 61.3%, #71ACF7 103.06%)',
      },
      spacing: {
        0: '0rem',
        1: '0.0625rem', // 1px
        2: '0.125rem', // 2px
        4: '0.25rem', // 4px
        5: '0.3125rem', // 5px
        6: '0.375rem', // 6px
        8: '0.5rem', // 8px
        10: '0.625rem', // 10px
        12: '0.75rem', // 12px
        14: '0.875rem', // 14px
        16: '1rem', // 16px
        18: '1.126rem', // 18px
        20: '1.25rem', // 20px
        22: '1.375rem', // 20px
        24: '1.5rem', // 24px
        30: '1.875rem', // 30px
        32: '2rem', // 32px
        40: '2.5rem', // 40px
        44: '2.75rem', // 44px
        48: '3rem', // 48px
        50: '3.125rem', // 48px
        60: '3.75rem', // 60px
        64: '4rem', // 64px
        80: '5rem', // 80
      },
      borderRadius: {
        10: '0.625rem', // 10x
        16: '1rem', // 16px
        20: '1.25rem', // 18px
        30: '1.875rem', // 30px
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat-alternates)'],
        onest: ['var(--font-onest)'],
      },
    },
  },
  plugins: [],
};
