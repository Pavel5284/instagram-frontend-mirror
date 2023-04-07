// import { LogOutButton } from 'components/log-out-button';
import 'settings.config-muidts';
import { Typography, Stack } from '@mui/material';

export type HeaderPropsType = {
  withSideMenu?: boolean;
  isCreateProfilePage?: boolean;
};

export const Header = ({ withSideMenu, isCreateProfilePage }: HeaderPropsType) => (
  <Stack>
    <Typography variant="regular_text_14" sx={{ color: 'light.100' }}>
      Inctagram
    </Typography>
    {/* {!withSideMenu && isCreateProfilePage && <LogOutButton />} */}
  </Stack>
);
