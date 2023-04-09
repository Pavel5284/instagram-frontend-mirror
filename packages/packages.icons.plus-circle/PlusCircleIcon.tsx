import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const PlusCircleIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z" />
  </SvgIcon>
);
