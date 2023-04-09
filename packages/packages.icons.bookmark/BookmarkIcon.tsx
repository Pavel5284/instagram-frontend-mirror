import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const BookmarkIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M6 21a1 1 0 0 1-.863-.496A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-1.5.86l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z" />
  </SvgIcon>
);
