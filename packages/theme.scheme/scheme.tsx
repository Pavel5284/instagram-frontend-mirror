export type Scheme = ReturnType<typeof getScheme>;

export type Palette = Scheme['palette'];

export type Typography = Scheme['typography'];

const fontFamily = 'Inter, Arial';

export const getScheme = () => ({
  typography: {
    h1: {
      fontSize: '20px',
      lineHeight: '36px',
      fontWeight: 700,
      fontFamily,
    },
    h3: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily,
    },

    regular_text_16: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      fontFamily,
    },
    regular_text_14: {
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 400,
      fontFamily,
    },
    medium_text_14: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '24px',
      fontFamily,
    },
    bold_text_14: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '24px',
      fontFamily,
    },
    large: {
      fontWeight: 600,
      fontSize: '26px',
      lineHeight: '36px',
      fontFamily,
    },
  },
  palette: {
    light: {
      100: '#FFFFFF',
      300: '#F7FBFF',
      500: '#EDF3FA',
      700: '#D5DAE0',
      900: '#BDC1C7',
    },
    dark: {
      100: '#4C4C4C',
      300: '#333333',
      500: '#171717',
      700: '#0D0D0D',
      900: '#000000',
    },
    danger: {
      100: '#FF8099',
      300: '#F23D61',
      500: '#CC1439',
      700: '#990F2B',
      900: '#660A1D',
    },
    primary: {
      100: '#73A5FF',
      300: '#4C8DFF',
      500: '#397DF6',
      700: '#2F68CC',
      900: '#234E99',
    },
    success: {
      100: ' #80FFBF',
      300: '#22E584',
      500: '#14CC70',
      700: '#0F9954',
      900: '#0A6638',
    },
  },
});
