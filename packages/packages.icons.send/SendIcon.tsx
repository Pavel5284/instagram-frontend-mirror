import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const SendIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M21 4a1.307 1.307 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18c.022-.088.032-.179.03-.27zm-4.7 2.29-5.57 5.57L5.16 10 16.3 6.29zM14 18.84l-1.86-5.57 5.57-5.57L14 18.84z" />
    </SvgIcon>
  );
};
