import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
// import { AuthForm } from '../../../components/auth-form';
import { AuthForm } from 'packages.components.auth-form';
// import { ControlledInput } from '../../../components/controlled-input';
// import { Button } from '../../../components/button';
// import { Layout } from '../../../components/layout';
import googleImg from '../../../common/assets/images/registration/registration-icons/google-svgrepo-com.svg';
import facebookImg from '../../../common/assets/images/registration/registration-icons/facebook-svgrepo-com.svg';
import { Auth } from '../../../common/path';
import { useLoginMutation } from '../../../services/auth/sign-in/hooks';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email adress').required('Required'),
  password: yup.string().required('Required'),
});
type FormData = yup.InferType<typeof schema>;

export default function SignInForm() {
  const [errors, setErrors] = useState('');
  const { mutate: login, error } = useLoginMutation();
  const {
    control,
    clearErrors,
    handleSubmit,
    formState: { errors: loginErrors },
  } = useForm<FormData>({
    defaultValues: { email: '', password: '' },
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
            <Image width={36} height={36} alt="google-register" src={googleImg} />
            <Image width={36} height={36} alt="facebook-register" src={facebookImg} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledInput
              clearErrors={() => {
                setErrors('');
                clearErrors();
              }}
              control={control}
              name="email"
              label="Email"
              type="text"
              error={loginErrors.email?.message}
            />
            {/*  {loginErrors.email?.message && (
              <Typography sx={errorStyle} variant="regular_text_14">
                {loginErrors.email.message}
              </Typography>
            )} */}
            {/*  <input {...register('email')} placeholder="email" type="email" required />
          <p>{errors.email?.message}</p> */}
            <ControlledInput
              clearErrors={() => {
                setErrors('');
                clearErrors();
              }}
              control={control}
              name="password"
              label="Password"
              type="password"
              error={loginErrors.email?.message}
            />
            <div>{error && 'Invalid email or password'}</div>

            {/*   {loginErrors.password?.message && (
                <Typography sx={errorStyle} variant="regular_text_14">
                  {loginErrors.password.message}
                </Typography>
              )} */}
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
          <Typography variant="regular_text_16">Don't have an account?</Typography>
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
