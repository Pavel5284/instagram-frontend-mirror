import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PlusCircleOutlineIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20z" />
    <path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z" />
  </SvgIcon>
);
