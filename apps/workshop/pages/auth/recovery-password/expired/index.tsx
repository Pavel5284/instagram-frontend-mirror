import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Typography, Stack } from '@mui/material';
import timeManagement from 'common/assets/images/time-management/time-management.svg';
import { RecoveryPasswordStorageKey } from 'common/variables';
import { getLocalStorage } from 'common/helpers';
import { useRecoveryPasswordMutation } from 'services/auth/recovery-password';
import { Auth } from 'common/path';
import { InformationLayout } from 'packages.components.information-layout';
import { Modal } from 'packages.components.modal';
import { Button } from 'packages.inputs.button';

const Expired = () => {
  const { push } = useRouter();

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccessRequest = () => {
    setIsSuccess(true);
  };

  const { mutate: recoveryPassword, isError } = useRecoveryPasswordMutation(
    null,
    handleSuccessRequest,
  );

  let email: string | null = null;

  if (isError) push(Auth.RecoveryPassword);

  if (typeof window !== 'undefined') {
    email = getLocalStorage(RecoveryPasswordStorageKey);
  }

  const handleResendButtonClick = () => {
    if (email) {
      recoveryPassword(email);

      return;
    }

    push(Auth.RecoveryPassword);
  };

  const handleModalButtonClick = () => {
    setIsSuccess(false);
  };

  return (
    <Stack sx={{ display: isSuccess ? 'none' : 'block', height: '100vh' }}>
      <InformationLayout
        title="Email verification link expired"
        description="Looks like the verification link has expired. Not to worry, we can send the link again"
        buttonText="Resend verification link"
        onClick={handleResendButtonClick}
      >
        <Image
          style={{ marginTop: '30px' }}
          src={timeManagement}
          width="473"
          height="327.75"
          alt="time management"
          placeholder="blur"
          blurDataURL="common/assets/images/time-management/time-management.svg"
        />

        <Modal open={isSuccess} header="Email sent" setOpen={handleModalButtonClick}>
          <>
            <Typography
              variant="regular_text_16"
              color="light.100"
              sx={{
                mt: '22px',
                mb: '18px',
              }}
            >
              We have sent a link to confirm your email to&nbsp;
              {email}
            </Typography>

            <Button
              onClick={handleModalButtonClick}
              size="small"
              sx={{
                ml: 'auto',
              }}
            >
              <Typography variant="h3"> Ok</Typography>
            </Button>
          </>
        </Modal>
      </InformationLayout>
    </Stack>
  );
};

export default Expired;
