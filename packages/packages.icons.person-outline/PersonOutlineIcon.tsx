import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PersonOutlineIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM12 13a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
  </SvgIcon>
);
