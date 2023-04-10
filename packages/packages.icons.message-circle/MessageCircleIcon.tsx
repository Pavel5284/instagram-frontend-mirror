import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const MessageCircleIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M19.07 4.93a10 10 0 0 0-16.28 11c.096.199.127.422.09.64L2 20.8a1 1 0 0 0 .605 1.13c.126.05.26.073.395.07h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28l-.05-.02zM8 13a1 1 0 1 1 0-2.001A1 1 0 0 1 8 13zm4 0a1 1 0 1 1 0-2.002A1 1 0 0 1 12 13zm4 0a1 1 0 1 1 0-2.002A1 1 0 0 1 16 13z" />
  </SvgIcon>
);
