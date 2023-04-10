import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PinIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    <path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
  </SvgIcon>
);
