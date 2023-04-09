import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PersonIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM18 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1h12z" />
  </SvgIcon>
);
