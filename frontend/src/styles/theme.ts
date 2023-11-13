import { Theme } from 'theme-ui';

const theme: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    text: 'rgb(39, 46, 54)',
    background: 'rgb(235, 235, 235)',
    primary: 'rgb(4, 147, 154)',
    secondary: 'rgb(154, 4, 147)',
    accent: 'rgb(147, 154, 4)',
    modes: {
      dark: {
        text: 'rgb(235, 235, 235)',
        background: 'rgb(39, 46, 54)',
        primary: 'rgb(101, 244, 251)',
        secondary: 'rgb(251, 101, 244)',
        accent: 'rgb(244, 251, 101)',
      },
    },
  },
  shadows: {
    low: '-0.7px 0.5px 1px hsl(0deg 0% 0% / 0.19), -3px 2.2px 4.2px -2.5px hsl(0deg 0% 0% / 0.19)',
    medium:
      '-0.7px 0.5px 1px hsl(0deg 0% 0% / 0.27), -14.9px 11.1px 20.9px -2.5px hsl(0deg 0% 0% / 0.27)',
    high: '-0.7px 0.5px 1px hsl(0deg 0% 0% / 0.25), -10.5px 7.9px 14.8px -0.8px hsl(0deg 0% 0% / 0.25), -31.8px 23.8px 44.7px -1.7px hsl(0deg 0% 0% / 0.25), -82.8px 61.9px 116.3px -2.5px hsl(0deg 0% 0% / 0.25)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};

export default theme;
