import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const BlockIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20z" />
  </SvgIcon>
);
