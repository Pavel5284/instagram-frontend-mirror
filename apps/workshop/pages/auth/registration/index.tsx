import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { AuthForm } from 'packages.components.auth-form';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import { Modal } from 'packages.components.modal';
import { Layout } from 'components/layout';
import { useRegisterNewUserMutation } from 'services/auth/registration';
import { Auth } from 'common/path';
import googleImg from 'common/assets/images/registration/registration-icons/google-svgrepo-com.svg';
import facebookImg from 'common/assets/images/registration/registration-icons/facebook-svgrepo-com.svg';

export const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'must be at least 6 characters')
    .max(20, 'must be shorter than or equal to 20 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'The password must match the new password'),
});

type FormData = Yup.InferType<typeof signupSchema>;

export default function RegistrationForm() {
  const [errors, setErrors] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('');

  const { mutate: registerNewUser } = useRegisterNewUserMutation(setErrors, setIsModalOpen);

  const {
    handleSubmit,
    clearErrors,
    control,
    formState: { errors: registerErrors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
    reValidateMode: 'onSubmit',
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = (values: FormData) => {
    registerNewUser({ email: values.email, password: values.password });
    setCurrentEmail(values.email);
  };

  const handleModalState = () => {
    setIsModalOpen(false);
  };

  const handleClearErrors = () => {
    setErrors('');
    clearErrors();
  };

  return (
    <Layout>
      <Stack sx={{ display: isModalOpen ? 'none' : 'block' }}>
        <AuthForm
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              mb: '15px',
            }}
          >
            Sign Up
          </Typography>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <Image width={36} height={36} alt="google-register" src={googleImg} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <Image width={36} height={36} alt="facebook-register" src={facebookImg} />
            </a>
          </div>

          <form
            style={{
              display: 'flex',
              position: 'relative',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'center',
              padding: '10px',
              alignItems: 'center',
            }}
          >
            <InputWithHookForm
              clearErrors={handleClearErrors}
              control={control}
              name="email"
              label="Email"
              isError={!!registerErrors.email?.message}
              helperText={registerErrors.email?.message}
            />

            <InputWithHookForm
              clearErrors={handleClearErrors}
              control={control}
              name="password"
              label="Password"
              type="password"
              isError={!!registerErrors.password?.message}
              helperText={registerErrors.password?.message}
            />

            <InputWithHookForm
              clearErrors={handleClearErrors}
              control={control}
              name="confirmPassword"
              label="Password confirmation"
              type="password"
              isError={!!registerErrors.confirmPassword?.message}
              helperText={registerErrors.confirmPassword?.message}
            />

            {errors && (
              <Typography
                sx={{
                  color: 'danger.500',
                  position: 'absolute',
                  width: '95%',
                  fontSize: '12px',
                  top: '60%',
                }}
                variant="regular_text_14"
              >
                {errors}
              </Typography>
            )}

            <Button
              sx={{
                width: '100%',
                m: '60px 0 10px 0',
              }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
          </form>

          <Typography variant="regular_text_16">Do you have an account?</Typography>
          <Link
            sx={{ textDecoration: 'none', m: '20px 0' }}
            variant="h3"
            color="primary.500"
            href={Auth.SignIn}
          >
            Sign In
          </Link>
        </AuthForm>

        <Modal open={isModalOpen} header="Email sent" setOpen={handleModalState}>
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
              onClick={handleModalState}
              size="small"
              sx={{
                ml: 'auto',
              }}
            >
              <Typography variant="h3"> Ok</Typography>
            </Button>
          </>
        </Modal>
      </Stack>
    </Layout>
  );
}
