import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const SPACING = require("./windi.config-spacing.js");
const COLORS = require("./windi.config-colors.json");
const FONT_SIZE = require("./windi.config-font-size.js");
const GRID = require("./windi.config-grid.js");
const WIDTH = require("./windi.config-width.js");
const HEIGHT = require("./windi.config-height.js");
const SHADOW = require("./windi.config-shadow.js");

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*',
    './.sourcebit-nextjs-cache.json'
  ],
  safelist: [
    'text-neutral',
    'text-light',
    {
      pattern:
        /(m|p)(t|b|l|r)-(0|px|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif']
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))'
      },
      gridColumnStart: {
        span4: 'span 4'
      },
      gridColumnEnd: {
        neg3: '-3',
        span4: 'span 4'
      },
      maxWidth: {
        sectionBody: '846px'
      },
      padding: {
        '2/3': '66.666%',
        '3/4': '75%',
        '9/16': '56.25%'
      },
      screens: {
        xs: '480px'
      },
      width: {
        formField: 'calc(50% - 1rem)'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100%': { opacity: '0.2' }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      },
      colors: COLORS,
      boxShadow: SHADOW,
      fontSize: FONT_SIZE,
      spacing: SPACING,
      backgroundColor: {
        current: "currentColor",
      },
      ...WIDTH,
      ...HEIGHT,
      ...GRID,
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};

export default config;
