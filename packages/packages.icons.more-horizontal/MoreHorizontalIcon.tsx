import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const MoreHorizontalIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </SvgIcon>
  );
};
