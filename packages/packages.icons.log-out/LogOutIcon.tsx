import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export type LogOutIconProps = SvgIconProps;

export const LogOutIcon: FC<LogOutIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6h1zM20.82 11.42l-2.82-4a1 1 0 1 0-1.63 1.16L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 .02-1.18z" />
    </SvgIcon>
  );
};
