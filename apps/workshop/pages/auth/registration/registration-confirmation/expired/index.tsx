import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { InformationLayout } from 'packages.components.information-layout';
import { Modal } from 'packages.components.modal';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import { useResendEmailMutation } from 'services/auth/registration/hooks';
import timeManagement from 'common/assets/images/time-management/time-management.svg';

export const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});
type FormData = Yup.InferType<typeof emailSchema>;
const Expired = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [errors, setErrors] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  const { mutate: resendEmail } = useResendEmailMutation(
    setConfirmModalOpen,
    setIsModalOpen,
    setErrors,
  );

  const {
    handleSubmit,
    clearErrors,
    control,
    formState: { errors: resendErrors },
  } = useForm<FormData>({
    resolver: yupResolver(emailSchema),
    reValidateMode: 'onSubmit',
    defaultValues: { email: '' },
  });

  const onSubmit = (values: FormData) => {
    resendEmail(values.email);
    setCurrentEmail(values.email);
  };

  const handleModalButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleConfirmationModalButtonClick = () => {
    setConfirmModalOpen(!isConfirmModalOpen);
  };

  return (
    <Stack sx={{ display: isModalOpen ? 'none' : 'block', height: '100vh' }}>
      <InformationLayout
        title="Email verification link expired"
        description="Looks like the verification link has expired. Not to worry, we can send the link again"
        buttonText="Resend verification link"
        onClick={handleModalButtonClick}
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

        <Modal open={isModalOpen} header="Email information" setOpen={handleModalButtonClick}>
          <>
            <Typography
              variant="regular_text_16"
              color="light.100"
              sx={{
                mt: '22px',
                mb: '18px',
              }}
            >
              Please enter your email
            </Typography>
            <form
              style={{
                position: 'relative',
              }}
            >
              <InputWithHookForm
                clearErrors={() => {
                  setErrors('');
                  clearErrors();
                }}
                control={control}
                name="email"
                label="Email"
                isError={!!resendErrors.email?.message}
                helperText={resendErrors.email?.message}
              />

              {errors && (
                <Typography
                  sx={{
                    color: 'danger.500',
                    position: 'absolute',
                    width: '100%',
                    fontSize: '12px',
                    top: '50%',
                    left: '5px',
                    textAlign: 'center',
                  }}
                  variant="regular_text_14"
                >
                  {errors}
                </Typography>
              )}

              <Button
                onClick={handleSubmit(onSubmit)}
                size="fullwidth"
                sx={{
                  mt: '50px',
                }}
              >
                <Typography variant="h3"> Send instructions </Typography>
              </Button>
            </form>
          </>
        </Modal>
        <Modal
          open={isConfirmModalOpen}
          header="Email sent"
          setOpen={handleConfirmationModalButtonClick}
        >
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
              {currentEmail}
            </Typography>

            <Button
              onClick={handleConfirmationModalButtonClick}
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
