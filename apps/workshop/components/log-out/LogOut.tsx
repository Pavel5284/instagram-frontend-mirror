import Image from 'next/image';
import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useLogOutMutation } from 'services/auth/log-out';
import { Button } from 'packages.inputs.button';
import logOutImage from 'common/assets/images/log-out/logout.png';
import { ModalLogOut } from './ModalLogOut';

export const LogOut = () => {
  const [open, setOpen] = useState(false);

  const client = useQueryClient();

  const data = client.getQueryData<any>(['me']);

  const { mutate: logOutF } = useLogOutMutation();

  const logOutClick = () => {
    setOpen(false);
    logOutF();
  };

  const openModalClick = () => {
    setOpen(true);
  };

  return (
    <Stack>
      <Button
        type="button"
        variant="text"
        color="light"
        size="small"
        onClick={openModalClick}
      >
        <Image width={24} height={24} alt="/log-out.png" src={logOutImage} />
        <Typography variant="medium_text_14" sx={{ color: 'light.100' }}>Log Out</Typography>
      </Button>

      <ModalLogOut
        open={open}
        setOpen={setOpen}
        logOutClick={logOutClick}
        email={data && data.data.email}
        isLoading={false}
      />
    </Stack>
  );
};
