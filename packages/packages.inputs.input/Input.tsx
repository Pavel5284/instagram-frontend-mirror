import React, { FC, useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Scheme } from 'theme.scheme';
import { EyeOnIconOutline } from 'packages.icons.eye-on-outline';
import { EyeOffIconOutline } from 'packages.icons.eye-off-outline';
import { styleForInput } from './style';

export type InputType = {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: 'text' | 'password';
  error?: string | boolean;
  helperText?: string;
} & Omit<TextFieldProps, 'error' | 'helperText'>;

export const Input: FC<InputType> = ({
  value,
  onChange,
  label,
  helperText,
  type = 'text',
  error = '',
  ...props
}) => {
  const [show, setShow] = useState(false);
  const { palette } = useTheme() as Scheme;
  const { sx, InputProps, ...rest } = props;
  const showType = show ? 'text' : 'password';
  const types = type === 'password' ? showType : 'text';

  return (
    <TextField
      label={label}
      variant="standard"
      type={types}
      value={value}
      onChange={(e) => onChange(e)}
      sx={{
        ...styleForInput(palette, error),
        ...sx,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {type === 'password' && (
              <IconButton onClick={() => setShow(!show)}>
                {show ? (
                  <EyeOnIconOutline sx={{ fill: palette.light['900'] }} />
                ) : (
                  <EyeOffIconOutline sx={{ fill: palette.light['900'] }} />
                )}
              </IconButton>
            )}
          </InputAdornment>
        ),

        ...InputProps,
      }}
      error={!!error}
      helperText={helperText || ''}
      {...rest}
    />
  );
};
