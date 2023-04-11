import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useConfirmNewUserQuery } from 'services/auth/registration/hooks';
import { Auth } from 'common/path';
import RegistrationConfirmation from './Confirmation';

export default function Confirmation() {
  const { query, push, isReady } = useRouter();
  const { code } = query;

  const { isLoading, isSuccess, mutate: confirmUser } = useConfirmNewUserQuery();

  useEffect(() => {
    if (!code && isReady) {
      push(Auth.Registration);
    }

    if (code && isReady) {
      confirmUser(code);
    }
  }, [code, isReady]);

  if (isLoading) return <div style={{ color: 'white' }}>Loading...</div>;
  return isSuccess && <RegistrationConfirmation />;
}
