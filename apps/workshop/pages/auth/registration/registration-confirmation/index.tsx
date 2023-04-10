import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useConfirmNewUserQuery } from 'services/auth/registration/hooks';
import { Auth } from 'common/path';
import RegistrationConfirmation from './Confirmation';

export default function Confirmation() {
  const { query, push, isReady } = useRouter();
  const { code } = query;
  const { isLoading, isError } = useConfirmNewUserQuery(code as string);

  useEffect(() => {
    if (!code && isReady) {
      push(Auth.Registration);
    }
  }, [code, isReady]);

  if (isLoading) return <div style={{ color: 'white' }}>Loading...</div>;
  if (isError) push(Auth.RegistrationExpired);
  return !isError && <RegistrationConfirmation />;
}
