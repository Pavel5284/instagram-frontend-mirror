import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { InformationLayout } from 'packages.components.information-layout';
import { Layout } from 'components/layout';
import congratulations from 'common/assets/images/registration-confirmation/bro.svg';
import { Auth } from 'common/path';

export default function RegistrationConfirmation() {
  const { push } = useRouter();

  const handleLoginButton = () => {
    push(Auth.SignIn);
  };

  return (
    <Layout>
      <Stack sx={{ height: '100vh' }}>
        <InformationLayout
          title="Congratulations!"
          description="Your email has been confirmed"
          buttonText="Sign In"
          onClick={handleLoginButton}
        />
        <Image
          style={{
            marginTop: '50px',
          }}
          width={432}
          height={300}
          alt="sign-up"
          src={congratulations}
        />
      </Stack>
    </Layout>
  );
}
