'use client';
import { Lustria } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import pxToRem from '../utilities/styling/pxtoRem';
// import localFont from 'next/font/local';

const lustria = Lustria({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});
// const inter = Inter({
//   weight: ['400', '500'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const montserrat = Montserrat({
//   weight: ['400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: lustria.style.fontFamily,
    allVariants: {
      color: 'white',
    },
    body1: {
      fontSize: pxToRem(24),
    },
  },

  components: {},
});

export default theme;
