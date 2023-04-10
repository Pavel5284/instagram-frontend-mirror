import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const MaximizeIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM13 12h-1v1a1 1 0 0 1-2 0v-1H9a1 1 0 0 1 0-2h1V9a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z" />
  </SvgIcon>
);
