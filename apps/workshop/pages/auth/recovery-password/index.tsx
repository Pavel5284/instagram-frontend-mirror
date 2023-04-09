import { useState } from 'react';
import * as yup from 'yup';
import { Stack, Typography, Link } from '@mui/material';
import { Auth } from 'common/path';
import { AuthForm } from 'packages.components.auth-form';
import { Button } from 'packages.inputs.button';
import { Modal } from 'packages.components.modal';
import { useRecoveryPasswordMutation } from 'services/auth/recovery-password';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import {
  descriptionStyle,
  errorStyle,
  inputContainerStyle,
  linkStyle,
  titleStyle,
} from 'common/styles/auth/recovery-password/style';

type FormSchema = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  email: yup.string().email('Incorrect email').required('Required'),
});

const RecoveryPassword = () => {
  const [errors, setErrors] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handlerSuccessRequest = () => {
    setIsSuccess(true);
  };

  const handleFailedRequest = (error: string) => {
    setErrors(error);
  };

  const { mutate: recoveryPassword } = useRecoveryPasswordMutation(
    handleFailedRequest,
    handlerSuccessRequest,
  );

  const {
    handleSubmit,
    control,
    formState: { errors: emailError },
    clearErrors,
    getValues,
  } = useForm<FormSchema>({
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit',
    defaultValues: { email: '' },
  });

  const onSubmit = (data: FormSchema) => {
    recoveryPassword(data.email);
  };

  const handleModalButtonClick = () => {
    setIsSuccess(false);
  };

  const { email } = getValues();

  return (
    <Stack sx={{ display: isSuccess ? 'none' : 'block' }}>
      <AuthForm>
        <form>
          <Typography component="h1" variant="h1" sx={titleStyle}>
            Forgot Password
          </Typography>

          <Stack sx={inputContainerStyle}>
            <InputWithHookForm
              clearErrors={() => {
                setErrors('');
                clearErrors();
              }}
              isError={!!emailError.email || !!errors}
              control={control}
              name="email"
              label="email"
            />

            <Typography sx={errorStyle} variant="regular_text_14">
              {emailError.email?.message || errors}
            </Typography>
          </Stack>

          <Typography component="p" variant="regular_text_14" sx={descriptionStyle}>
            Enter your email address and we will send you further instructions
          </Typography>

          <Button sx={{ m: '0 auto' }} onClick={handleSubmit(onSubmit)}>
            <Typography variant="h3">Send Instructions</Typography>
          </Button>
        </form>

        <Link href={Auth.SignIn} sx={linkStyle}>
          <Typography variant="regular_text_16">Back to Sign In</Typography>
        </Link>
      </AuthForm>

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
    </Stack>
  );
};

export default RecoveryPassword;
