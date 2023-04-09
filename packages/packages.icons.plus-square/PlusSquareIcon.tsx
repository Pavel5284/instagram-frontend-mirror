import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PlusSquareIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z" />
  </SvgIcon>
);
