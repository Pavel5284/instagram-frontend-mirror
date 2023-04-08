import { ReactNode } from 'react';
import { Stack } from '@mui/material';
import { SideBarMenu } from 'components/side-bar-menu';
import { Header } from 'packages.components.header';
import { LogOut } from 'components/log-out/LogOut';
import { innerStyle, pageStyle } from './style';

type LayoutPropsType = {
  children: ReactNode;
  withSideMenu?: boolean;
  isCreateProfilePage?: boolean;
};

export const Layout = ({ children, withSideMenu, isCreateProfilePage }: LayoutPropsType) => (
  <Stack>
    <Header withSideMenu={withSideMenu} isCreateProfilePage={isCreateProfilePage}>
      {!withSideMenu && isCreateProfilePage && <LogOut />}
    </Header>
    <Stack sx={innerStyle}>
      {withSideMenu && <SideBarMenu />}
      <Stack sx={pageStyle}>{children}</Stack>
    </Stack>
  </Stack>

);
