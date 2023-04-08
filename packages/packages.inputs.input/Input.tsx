import React, { FC, useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@emotion/react';
import { styleForInput } from './style';
import { Scheme } from 'theme.scheme';

export type InputType = {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
                  <VisibilityOffIcon sx={{ fill: palette.light['900'] }} />
                ) : (
                  <RemoveRedEyeIcon sx={{ fill: palette.light['900'] }} />
                )}
              </IconButton>
            )}
          </InputAdornment>
        ),
        style: { color: palette.light['900'], fontFamily: 'Inter' },
        ...InputProps,
      }}
      error={!!error}
      helperText={helperText ? error : ''}
      {...rest}
    />
  );
};
