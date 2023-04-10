import Link from 'next/link';
import { Stack, ListItem, List, Typography } from '@mui/material';
import { LogOut } from 'components/log-out/LogOut';
import { linkContainerStyle, linkStyle, sideBarContainerStyle } from './style';
import { SIDE_MENU_ITEMS } from './constants';

export const SideBarMenu = () => (
  <Stack sx={sideBarContainerStyle}>
    <List sx={linkContainerStyle}>
      {SIDE_MENU_ITEMS.map((item, index) => (
        <ListItem sx={linkStyle} key={index}>
          <Link href={item.href}>
            <Typography variant="medium_text_14" sx={{ color: 'light.100' }}>
              {item.text}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </List>
    <LogOut />
  </Stack>
);
