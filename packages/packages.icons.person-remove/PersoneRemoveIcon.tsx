import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PersoneRemoveIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M21 6h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1" />
  </SvgIcon>
);
