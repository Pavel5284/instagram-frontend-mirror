import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Stack } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import { AuthForm } from 'packages.components.auth-form';
import { Button } from 'packages.inputs.button';
import {
  descriptionStyle,
  errorStyle,
  inputContainerStyle,
  titleStyle,
} from 'common/styles/auth/recovery-password/style';
import { useSetNewPasswordPasswordMutation } from 'services/auth/recovery-password';
import { Auth } from 'common/path';

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, 'must be at least 6 characters')
    .max(50, 'must be shorter than or equal to 20 characters')
    .required('Required'),
  passwordConfirmation: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('newPassword')], 'The password must match the new password'),
});

type FormSchema = yup.InferType<typeof schema>;

const NewPassword = () => {
  const { query, push, isReady } = useRouter();

  const { code } = query;

  const [errors, setErrors] = useState('');

  const handleFailedRequest = (error: string) => {
    setErrors(error);
  };

  const { mutate: setNewPassword } = useSetNewPasswordPasswordMutation(handleFailedRequest);

  const {
    handleSubmit,
    control,
    formState: {
      errors: { passwordConfirmation: passwordConfirmationError, newPassword: newPasswordError },
    },
    clearErrors,
  } = useForm<FormSchema>({
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit',
    defaultValues: { newPassword: '', passwordConfirmation: '' },
  });

  const onSubmit = (data: FormSchema) => {
    setNewPassword({
      newPassword: data.newPassword,
      recoveryCode: code,
    });
  };

  useEffect(() => {
    if (!code && isReady) {
      push(Auth.RecoveryPassword);
    }
  }, [code, isReady]);

  return (
    <Stack>
      <AuthForm>
        <form>
          <Typography variant="h1" sx={titleStyle}>
            Create New Password
          </Typography>

          <Stack sx={inputContainerStyle}>
            <InputWithHookForm
              clearErrors={() => {
                setErrors('');
                clearErrors();
              }}
              control={control}
              name="newPassword"
              label="New password"
              type="password"
              isError={!!newPasswordError?.message || !!errors}
            />

            <Typography sx={errorStyle} variant="regular_text_14">
              {errors || newPasswordError?.message}
            </Typography>
          </Stack>

          <Stack sx={inputContainerStyle}>
            <InputWithHookForm
              clearErrors={() => {
                setErrors('');
                clearErrors();
              }}
              control={control}
              name="passwordConfirmation"
              label="Password confirmation"
              type="password"
              isError={!!passwordConfirmationError?.message || !!errors}
            />

            <Typography sx={errorStyle} variant="regular_text_14">
              {errors || passwordConfirmationError?.message}
            </Typography>
          </Stack>

          <Typography component="p" variant="regular_text_14" sx={descriptionStyle}>
            Your password must be between 6 and 20 characters
          </Typography>

          <Button sx={{ m: '0 auto' }} color="primary" onClick={handleSubmit(onSubmit)}>
            <Typography variant="h3">Send Instructions</Typography>
          </Button>
        </form>
      </AuthForm>
    </Stack>
  );
};

export default NewPassword;
