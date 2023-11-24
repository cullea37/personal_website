import { Theme } from 'theme-ui';

const baseColors = {
  text: 'hsl(220deg 30% 10%)',
  background: 'rgb(235, 235, 235)',
  primary: 'rgb(4, 147, 154)',
  secondary: 'rgb(154, 4, 147)',
  accent: 'rgb(147, 154, 4)',
  shadow: '220deg 30% 10%',
};

const darkColors = {
  text: 'hsl(0deg 0% 92%)',
  background: 'rgb(39, 46, 54)',
  primary: 'rgb(101, 244, 251)',
  secondary: 'rgb(251, 101, 244)',
  accent: 'rgb(244, 251, 101)',
  shadow: '0deg 0% 92%',
};

const baseStyles = {
  Button: {
    color: 'background',
    bg: 'primary',
    cursor: 'pointer',
    borderRadius: 'default',
    transition: 'all 0.2s ease-in-out',
    boxShadow: 'low',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: 'medium',
    },
    '&:active': {
      transform: 'translateY(0px)',
      boxShadow: 'high',
    },
  },
};

const theme: Theme = {
  breakpoints: ['576px', '768px', '992px', '1200px'],
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
    ...baseColors,
    modes: {
      light: {
        ...baseColors,
      },
      dark: {
        ...darkColors,
      },
    },
  },
  shadows: {
    low: `0px 0.3px 0.3px hsl(var(--theme-ui-colors-shadow) / 0.41),
    0px 1.2px 1.4px -2.4px hsl(var(--theme-ui-colors-shadow) / 0.41)`,
    medium: `0px 0.3px 0.3px hsl(var(--theme-ui-colors-shadow) / 0.38),
    0px 1.6px 1.8px -1.2px hsl(var(--theme-ui-colors-shadow) / 0.38),
    0px 5.9px 6.7px -2.4px hsl(var(--theme-ui-colors-shadow) / 0.39)`,
    high: `0px 0.3px 0.3px hsl(var(--theme-ui-colors-shadow) / 0.35),
    0px 2.1px 2.4px -0.5px hsl(var(--theme-ui-colors-shadow) / 0.35),
    0px 4.4px 5px -1px hsl(var(--theme-ui-colors-shadow) / 0.36),
    0px 8.4px 9.5px -1.5px hsl(var(--theme-ui-colors-shadow) / 0.36),
    -0.1px 15.4px 17.4px -2px hsl(var(--theme-ui-colors-shadow) / 0.36),
    -0.2px 26.5px 30px -2.4px hsl(var(--theme-ui-colors-shadow) / 0.36)`,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'background',
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
    svg: {
      transition: 'all 0.2s ease-in-out',
    },
  },
  buttons: {
    basic: {
      ...baseStyles.Button,
    },
    nav: {
      bg: 'background',
      color: 'primary',
      borderRadius: '0',
      height: '60px',
      cursor: 'pointer',
      '&:hover': {
        transition: 'all 0.2s ease-in-out',
        transform: 'none',
        color: 'secondary',
      },
      '&:active': {
        transition: 'all 0.2s ease-in-out',
        transform: 'none',
        color: 'secondary',
        bg: 'primary',
      },
    },
    navIcon: {
      bg: 'background',
      color: 'primary',
      cursor: 'pointer',
      height: '60px',
      width: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      '&:hover': {
        transition: 'all 0.2s ease-in-out',
        transform: 'none',
        color: 'secondary',
      },
      '&:active': {
        transition: 'all 0.2s ease-in-out',
        transform: 'none',
        color: 'secondary',
        bg: 'primary',
      },
    },
  },
};

export default theme;
