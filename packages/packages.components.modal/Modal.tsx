import React, { FC } from 'react';
import { IconButton, Modal as MuiModal, Stack, Typography, ModalProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';
import { Scheme } from 'theme.scheme';

type ModalType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  header: string;
  children: React.ReactNode;
  width?: number; // размер модалки sx-делается для контента модалки
} & Partial<ModalProps>;

export const Modal: FC<ModalType> = ({
  open,
  setOpen,
  header,
  width = 378,
  children,
  ...props
}) => {
  const { palette } = useTheme() as Scheme;
  const { sx, ...rest } = props;
  const handleClose = () => setOpen(false);
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={{
          position: 'absolute',
          top: '50%',
          left: ' 50%',
          transform: 'translate(-50%, -50%)',
          width: `${width}px`,
          background: palette.dark['300'],
          border: `0.1px solid ${palette.dark['100']}`,
          borderRadius: ' 3px',
          outline: 'none',
          pb: 1,
          boxSizing: 'border-box',

          '@media (max-width: 600px)': {
            width: '90vw',
          },
        }}
        {...rest}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: 1, borderBottom: `0.1px solid ${palette.dark['100']}` }}
        >
          <Typography color={palette.light['100']}>{header}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ fill: palette.light[300] }} />
          </IconButton>
        </Stack>
        <Stack sx={{ padding: 1, ...sx }}>{children}</Stack>
      </Stack>
    </MuiModal>
  );
};
