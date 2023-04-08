import { Palette } from 'common/scheme/scheme';
import { parentColor } from './Button';

export const colorStyle: any = (theme: Palette, parentColor: parentColor) => ({
  primary: {
    contained: {
      bgcolor: theme.primary['500'],
      color: 'white',
      border: 'none',
      '&:hover': {
        bgcolor: theme.primary['700'],
      },
    },
    outlined: {
      bgcolor: 'none',
      color: theme.primary['300'],
      border: `1px solid ${theme.primary['500']}`,
      '&:hover': {},
    },
    text: {
      color: theme.primary['300'],
    },
  },
  light: {
    contained: {
      bgcolor: theme.light['300'],
      color: theme.dark['500'],
      border: 'none',
      '&:hover': {
        bgcolor: theme.light['700'],
      },
    },
    outlined: {
      bgcolor: 'none',
      color: theme.light['300'],
      border: `1px solid ${theme.light['300']}`,
      '&:hover': {
        color: theme.light['300'],
        border: `1px solid ${theme.light['500']} `,
      },
    },
    text: {
      color: theme.light['300'],
    },
  },
  danger: {
    contained: {
      bgcolor: theme.danger['300'],
      color: theme.light['100'],
      border: 'none',
      '&:hover': {
        bgcolor: theme.danger['700'],
      },
    },
    outlined: {
      bgcolor: 'none',
      color: theme.danger['300'],
      border: `1px solid ${theme.danger['300']} `,
      '&:hover': {
        color: theme.danger['700'],
        border: `1px solid ${theme.danger['700']} `,
      },
    },
    text: {
      color: theme.danger['300'],
    },
  },
  gradient: {
    contained: {
      background:
        'linear-gradient(transparent,transparent) padding-box, linear-gradient(to right, #FF8099 0%, #73A5FF 51%, #FF8099 100%) border-box',
      color: theme.light['100'],
      border: 'none',
      backgroundSize: '200% auto',
      transition: '0.5s',
      '&:hover': {
        backgroundPosition: 'right center',
      },
    },
    outlined: {
      background: `linear-gradient(${theme.dark[parentColor]},${theme.dark[parentColor]}) padding-box, linear-gradient(#171717,#171717) padding-box, linear-gradient(to right, #FF8099 0%, #73A5FF 51%,#FF8099  100%) border-box`,
      color: theme.primary['100'],
      border: '2px solid transparent',
      backgroundSize: '200% auto',
      transition: '0.5s',
      '&:hover': {
        backgroundPosition: 'right center',
        border: '2px solid transparent',
      },
    },
    text: {
      color: theme.primary['300'],
    },
  },
});

export const sizeStyle = {
  fullwidth: '100%',
  large: '230px',
  medium: '220px',
  small: '100px',
};
