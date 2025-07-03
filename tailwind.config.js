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
        'white-80': 'rgba(255, 255, 255, 0.7)',
        'black-30': 'rgba(0, 0, 0, 0.3)',
        red: 'rgba(230, 0, 35, 1)',
        'blue-behance': 'rgba(0, 92, 255, 1)',
        gray: '#53555a',
        'b-color': 'rgba(240, 240, 255, 1)',
        'b-color-2': 'rgba(182, 212, 253, 1)',
        'b-color-3': 'rgba(159, 197, 238, 1)',
        'extra-light-gray': '#E3E3E3',
      },
      backgroundImage: {
        'light-gradient':
          'radial-gradient(85.84% 85.9% at 28.75% 14.1%, rgba(223, 233, 245, 0.5) 31.73%, rgba(186, 206, 239, 0.5) 72.75%, rgba(175, 200, 249, 0.5) 86.9%, rgba(154, 188, 255, 0.5) 100%)',
        'dark-gradient':
          'radial-gradient(103.21% 103.21% at 0% -3.21%, #9FC5EE 0%, #477BCD 29.19%, #1B1B84 65.98%, #09094B 94.23%)',
        'attention-gradient':
          'linear-gradient(119.12deg, #EFF5FF 7.07%, #C7E0FF 61.3%, #71ACF7 103.06%)',
        'split-light-blue-gradient':
          'linear-gradient(22.56deg, rgba(255, 255, 255, 0) 40.69%, #F0F0FF 82.15%)',
        'split-blue-gradient':
          'linear-gradient(30.77deg, rgba(207, 228, 255, 0) 7.73%, #C6DEFF 46.83%)',
        'split-white-gradient':
          'linear-gradient(28.3deg, #FFFFFF 42.82%, #F7F7F7 80.96%);\n',
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
        30: '1.875rem',
        32: '2rem',
        40: '2.5rem',
        44: '2.75rem',
        48: '3rem',
        50: '3.125rem',
        60: '3.75rem',
        64: '4rem',
        80: '5rem',
        f0: '0vw',

        f1: '0.052vw',
        f2: '0.104vw',
        f4: '0.208vw',
        f5: '0.260vw',
        f6: '0.313vw',
        f8: '0.417vw',
        f10: '0.521vw',
        f12: '0.625vw',
        f14: '0.729vw',
        f16: '0.833vw',
        f18: '0.938vw',
        f20: '1.042vw',
        f22: '1.146vw',
        f24: '1.250vw',
        f30: '1.563vw',
        f32: '1.667vw',
        f40: '2.083vw',
        f44: '2.292vw',
        f48: '2.500vw',
        f50: '2.604vw',
        f60: '3.125vw',
        f64: '3.333vw',
        f80: '4.167vw',
      },
      borderRadius: {
        10: '0.625rem', // 10x
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
        '2xl': '1536px', // по умолчанию
        '3xl': '1820px', // по умолчанию
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat-alternates)'],
        onest: ['var(--font-onest)'],
      },
    },
  },
  plugins: [],
};
