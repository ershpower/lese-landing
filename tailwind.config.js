/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#150197',
        'light-gray': 'rgba(248, 248, 255, 1)',
        'black-10': 'rgba(0, 0, 0, 0.1)',
        'black-20': 'rgba(0, 0, 0, 0.2)',
        'black-30': 'rgba(0, 0, 0, 0.3)',
        'black-40': 'rgba(0, 0, 0, 0.4)',
        'black-50': 'rgba(0, 0, 0, 0.5)',
        'black-70': 'rgba(0, 0, 0, 0.7)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-30': 'rgba(255, 255, 255, 0.3)',
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'white-70': 'rgba(255, 255, 255, 0.7)',
        red: 'rgba(230, 0, 35, 1)',
        'behance-blue': 'rgba(0, 92, 255, 1)',
        icon: 'rgba(227, 227, 227, 1)',
        blue: 'rgba(0, 176, 246, 1)',
      },
      boxShadow: {
        marquee: '2px 2px 6px 0px #1501974D',
        'custom-blue': '2px 2px 20px 0px rgba(21, 1, 151, 0.3)',
      },
      backgroundImage: {
        'profile-bg': 'url("/hero/profile-bg.png")',
        'profile-bg-desktop': 'url("/hero/profile-bg-desk.png")',
        'profile-bg-desktop2xl': 'url("/hero/profile-bg-desk-2xl.png")',
        'portfolio-bg': 'url("/portfolio/mobile-bg.png")',
        'portfolio-tablet-bg': 'url("/portfolio/tablet-bg.png")',
        'portfolio-desk-bg': 'url("/portfolio/desk-bg.png")',
        'portfolio-bg-circle': 'url("/portfolio/circle.png")',
        'hero-bg': 'url("/hero/xs-bg-1x.png")',

        'marquee-gradient-1':
          'linear-gradient(90.12deg, #1ED1F9 18.81%, #FFFFFF 92.52%)',
        'marquee-gradient-2':
          'linear-gradient(90.12deg, #FFFFFF 18.81%, #1ED1F9 92.52%)',
        'burger-gradient':
          'linear-gradient(173.63deg, rgba(2, 2, 51, 0.7) 7.1%, rgba(9, 45, 200, 0.7) 94.96%)',
        'menu-gradient':
          'radial-gradient(85.84% 85.9% at 28.75% 14.1%, rgba(223, 233, 245, 0.5) 31.73%, rgba(186, 206, 239, 0.5) 72.75%, rgba(175, 200, 249, 0.5) 86.9%, rgba(154, 188, 255, 0.5) 100%)',
        'button-gradient':
          'url("/noise.png"), linear-gradient(270deg, #1ED1F9 0%, #11B8DD 18.76%, #1166DD 42.01%, #1F07BB 59.96%, #150197 84.84%)',
        'brand-gradient': `
        url("/noise.png"),
        radial-gradient(
          100.68% 82.61% at 82.74% 17.39%,
          rgba(17, 184, 221, 0.5) 23.56%,
          rgba(17, 102, 221, 0.3) 38.94%,
          rgba(31, 7, 187, 0) 59.13%,
          rgba(21, 1, 151, 0) 79.33%
        ),
        radial-gradient(
          122.11% 100% at 3.56% 100%,
          #1ED1F9 6.25%,
          #11B8DD 26.28%,
          #1166DD 43.38%,
          #1F07BB 59.13%,
          #150197 84.31%
        )
      `,
      },
      spacing: {
        0: '0rem',
        1: '0.0625rem',
        2: '0.125rem',
        4: '0.25rem',
        5: '0.3125rem',
        6: '0.375rem',
        8: '0.5rem',
        10: '0.625rem',
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.126rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        28: '1.75rem',
        30: '1.875rem',
        32: '2rem',
        34: '2.0625rem',
        36: '2.25rem',
        40: '2.5rem',
        44: '2.75rem',
        48: '3rem',
        50: '3.125rem',
        60: '3.75rem',
        64: '4rem',
        80: '5rem',
      },
      borderRadius: {
        8: '0.5rem', // 10x
        10: '0.625rem', // 10x
        12: '0.75rem', // 10x
        16: '1rem', // 16px
        20: '1.25rem', // 18px
        30: '1.875rem', // 30px
      },
      screens: {
        xs: '375px',
        sm: '640px', // по умолчанию
        md: '768px', // по умолчанию
        lg: '1024px', // по умолчанию
        xl: '1280px', // по умолчанию
        '2xl': '1920px', // по умолчанию
        '3xl': '2560px', // по умолчанию
      },
      fontSize: {
        10: ['0.625rem'], // 10px
        12: ['0.75rem'], // 12px
        14: ['0.875rem'], // 14px
        16: ['1rem'], // 16px
        18: ['1.125rem'], // 18px
        20: ['1.25rem'], // 20px
        22: ['1.375rem'], // 20px
        24: ['1.5rem'], // 24px
        26: ['1.625rem'], // 24px
        28: ['1.75rem'], // 28px
        30: ['1.875rem'], // 28px
        32: ['2rem'], // 32px
        36: ['2.25rem'], // 36px
        38: ['2.375rem'], // 38px
        40: ['2.5rem'], // 40px
        42: ['2.625rem'], // 42px
        52: ['3.25rem'], // 52px
        48: ['3rem'], // 52px
        60: ['3.75rem'], // 52px
        80: ['5rem'], // 52px
        100: ['6.25rem'], // 52px
        140: ['8.74rem'], // 52px
        160: ['10rem'], // 52px
      },
      fontFamily: {
        onest: ['var(--font-onest)'],
      },
    },
  },
};
