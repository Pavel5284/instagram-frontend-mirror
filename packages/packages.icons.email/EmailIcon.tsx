import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const EmailIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6h12.66zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 1.2 0L20 7.25V17a1 1 0 0 1-1 1z" />
    </SvgIcon>
  );
};
