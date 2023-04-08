import React, { FC } from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';
import { useTheme } from '@emotion/react';
import { colorStyle, sizeStyle } from './style';
import { Scheme } from 'theme.scheme';

export type parentColor = '100' | '300' | '500' | '700' | '900';

type ButtonType = {
  onClick: () => void;
  size?: 'fullwidth' | 'large' | 'medium' | 'small';
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'light' | 'danger' | 'gradient';
  children: React.ReactNode;
  parentColor?: parentColor; // степень dark, если исп varian 'outlined' and color  'gradient'
} & Omit<ButtonProps, 'color' | 'size'>;

export const Button: FC<ButtonType> = ({
  size = 'large',
  variant = 'contained',
  color = 'primary',
  onClick,
  children,
  parentColor = '700',
  ...props
}) => {
  const { palette } = useTheme() as Scheme;
  const { sx, ...rest } = props;
  return (
    <MuiButton
      sx={{
        display: 'flex',
        gap: '10px',
        textTransform: 'none',
        width: sizeStyle[size],
        ...colorStyle(palette, parentColor)[color][variant],
        ...sx,
      }}
      onClick={onClick}
      variant={variant}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
