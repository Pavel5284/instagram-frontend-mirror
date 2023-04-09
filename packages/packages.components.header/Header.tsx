// import { LogOutButton } from 'components/log-out-button';
import 'settings.config-muidts';
import { Typography, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { headerStyle } from './style';


export type HeaderPropsType = {
  withSideMenu?: boolean;
  isCreateProfilePage?: boolean;
  children?: ReactNode;
};

export const Header = ({ withSideMenu, isCreateProfilePage, children }: HeaderPropsType) => (
  <Stack sx={headerStyle} >
    <Typography variant="large" sx={{ color: 'light.100' }}>
      Inctagram
    </Typography>
    {children}
  </Stack>
);
