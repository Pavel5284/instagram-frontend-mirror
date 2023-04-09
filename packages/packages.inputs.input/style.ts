import { Palette } from 'theme.scheme';

export const styleForInput = (theme: Palette, error: string | boolean) => ({
  color: theme.light['900'],
  width: '100%',
  '& .MuiFormHelperText-root': {
    color: `${theme.danger['100']} !important`,
    fontFamily: 'Inter',
    fontSize: '11px',
  },
  '&:focus-within': {
    border: 'none',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: error ? `${theme.danger['300']} !important` : theme.dark['300'],
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: error ? theme.danger['300'] : theme.dark['300'],
  },
  '& .MuiInput-underline.Mui-error:after': {
    borderBottomColor: theme.danger['300'],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.dark['100'],
  },
  '& label.Mui-focused': {
    color: theme.light['900'],
  },
  '& label': {
    fontFamily: 'Inter',
    color: theme.light['900'],
  },
  '& label.Mui-error': {
    color: theme.danger['100'],
  },
  '& input': {
    color: theme.light['900'],
    fontFamily: 'Inter',
    '&:-webkit-autofill': {
      color: theme.light['900'],
      boxShadow: `0 0 0 30px ${theme.dark['500']} inset`,
      '-webkit-text-fill-color': theme.light['900'],
    },
  },
});
