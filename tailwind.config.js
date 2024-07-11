import withMT from '@material-tailwind/react/utils/withMT';
import {blackA, green, mauve, violet} from '@radix-ui/colors';
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    fontFamily: {
      body: ['Barlow', 'Roboto', 'sans-serif'],
      dunbar: 'Dunbar',
      nunito: 'Nunito Sans',
      barlow: 'Barlow',
      'barlow-condensed': 'Barlow-Condensed',
      hudson: 'Hudson',
      espiritu: 'espiritu',
      'espiritu-condensed': 'espiritu-condensed',
      'espiritu-expanded': 'espiritu-condensed',
      'espiritu-dingbats': 'espiritu-dingbats',
      'espiritu-script': 'espiritu-script',
    },
    extend: {
      colors: {
        primary: '#7A392D',
        'primary-dark': '#231B19',
        second: '#637160',
        yellow: '#e47a0f',
        custombgGreen: '#425b34',
        sublistbgGray: '#eee',
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          lg: '20px',
          xl: '20px',
          '2xl': '20px',
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1340px',
          '2xl': '1340px',
        },
      },
      keyframes: {
        overlayShow: {
          from: {opacity: '0'},
          to: {opacity: '1'},
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: {opacity: '1', transform: 'translate(-50%, -50%) scale(1)'},
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
});
