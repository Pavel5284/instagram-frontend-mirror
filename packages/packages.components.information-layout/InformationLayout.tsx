import { FC, ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import { Button } from 'packages.inputs.button';
import 'settings.config-muidts';

export type InformationLayoutProps = {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  children?: ReactNode;
};

export const InformationLayout: FC<InformationLayoutProps> = ({
  title,
  description,
  buttonText,
  onClick,
  children,
}) => (
  <Stack alignItems="center" sx={{ pt: '35px' }}>
    <Typography variant="h1" color="light.100">
      {title}
    </Typography>

    <Typography sx={{ mt: '19px' }} variant="regular_text_16" color="light.100">
      {description}
    </Typography>

    {buttonText && onClick && (
      <Button sx={{ mt: '30px' }} onClick={onClick}>
        <Typography variant="h3">{buttonText}</Typography>
      </Button>
    )}

    {children}
  </Stack>
);
