import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { AuthForm } from 'packages.components.auth-form';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import googleImg from 'common/assets/images/registration/registration-icons/google-svgrepo-com.svg';
import { Auth } from 'common/path';
import { useLoginMutation } from 'services/auth/sign-in/hooks';
import { Layout } from 'components/layout';
import facebookImg from 'common/assets/images/registration/registration-icons/facebook-svgrepo-com.svg';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email adress').required('Required'),
  password: yup.string().required('Required'),
});
type FormData = yup.InferType<typeof schema>;

export default function SignInForm() {
  // const [errors, setErrors] = useState('');

  const { mutate: login, error } = useLoginMutation();
  const {
    control,
    clearErrors,
    handleSubmit,
    formState: { errors: loginErrors },
  } = useForm<FormData>({
    defaultValues: { email: '', password: '' },
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    login(data);
  };

  return (
    <Layout>
      <Stack sx={{ display: 'block', height: '100vh' }}>
        <AuthForm
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" sx={{ mb: '15px' }}>
            Sign in
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
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputWithHookForm
              clearErrors={() => {
                clearErrors();
              }}
              control={control}
              name="email"
              label="Email"
              type="text"
              isError={!!loginErrors.email?.message}
              helperText={loginErrors.email?.message}
            />
            {/*  {loginErrors.email?.message && (
              <Typography sx={errorStyle} variant="regular_text_14">
                {loginErrors.email.message}
              </Typography>
            )} */}
            {/*  <input {...register('email')} placeholder="email" type="email" required />
          <p>{errors.email?.message}</p> */}
            <InputWithHookForm
              clearErrors={() => {
                clearErrors();
              }}
              control={control}
              name="password"
              label="Password"
              type="password"
              isError={!!loginErrors.password?.message}
              helperText={loginErrors.password?.message}
            />
            {/*   {loginErrors.password?.message && (
                <Typography sx={errorStyle} variant="regular_text_14">
                  {loginErrors.password.message}
                </Typography>
              )} */}
            {error && (
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
                Invalid email or password
              </Typography>
            )}
            {/*  <input {...register('password')} placeholder="password" type="password" required />
          <p>{errors.password?.message}</p> */}
            <Button
              sx={{
                width: '100%',
                m: '60px 0 10px 0',
              }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign In
            </Button>
            {/* <button type="submit"> Sign In </button> */}
          </form>
          <Typography variant="regular_text_16">Don&apos;t have an account?</Typography>
          <Link
            sx={{ textDecoration: 'none', m: '20px 0' }}
            variant="h3"
            color="primary.500"
            href={Auth.Registration}
          >
            <Typography variant="regular_text_16">Sign Up</Typography>
          </Link>
        </AuthForm>
      </Stack>
    </Layout>
  );
}
