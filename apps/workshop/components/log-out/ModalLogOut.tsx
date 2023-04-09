import { Stack, Typography } from '@mui/material';

import { Modal } from 'packages.components.modal';
import { Button } from 'packages.inputs.button';
import { modalButtonContainerStyle } from './style';

export type ModalLogOutPropsType = {
    open: boolean,
    setOpen: (open: boolean) => void,
    logOutClick: () => void,
    email:string
    isLoading:boolean
  };

export const ModalLogOut = ({ open,
     setOpen, logOutClick, email, isLoading }: ModalLogOutPropsType) => (
       <Modal open={open} setOpen={setOpen} header="Log Out">
         {isLoading ? <Stack>Loading...</Stack>
      :
         <Stack>
           <Typography
             variant="regular_text_16"
             sx={{
            color: 'light.100',
            margin: '30px 20px',
            fontFamily: 'Inter, Arial',
          }}
           >
             {`Are you really want to log out of your account ${email}?`}
           </Typography>
           <Stack sx={modalButtonContainerStyle}>
             <Button onClick={logOutClick} variant="outlined" color="primary" parentColor="500" size="small">
               yes
             </Button>
             <Button
               onClick={() => {
              setOpen(false);
            }}
               variant="contained"
               color="primary"
               parentColor="500"
               size="small"
             >
               No
             </Button>
           </Stack>
         </Stack> }
       </Modal>
  );
