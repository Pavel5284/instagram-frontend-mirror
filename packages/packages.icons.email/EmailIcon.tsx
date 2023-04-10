import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const EmailIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2-6.5 4.47a1 1 0 0 1-1 0L5 6h14z" />
  </SvgIcon>
);
