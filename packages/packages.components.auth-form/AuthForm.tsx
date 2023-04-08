import React, { FC } from 'react';
import { Stack } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Scheme } from 'theme.scheme';

type AuthFormType = {
  children: React.ReactNode;
  sx?: any;
};
export const AuthForm: FC<AuthFormType> = ({ children, sx }) => {
  const { palette } = useTheme() as Scheme;
  return (
    <Stack
      sx={{
        backgroundColor: palette.dark['500'],
        border: `0.1px solid ${palette.dark['300']}`,
        borderRadius: 1,
        padding: 2,
        color: 'white',
        paddingTop: 3,
        paddingBottom: 3,
        width: '378px',
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};
