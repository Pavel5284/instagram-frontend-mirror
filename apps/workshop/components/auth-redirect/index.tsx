import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren } from 'react';
// import { CustomCircularProgress } from 'packages.components.progress';
import { useMeQuery } from '../../services/auth/sign-in/hooks';

export const AuthRedirect: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isError } = useMeQuery();
  const { pathname, push } = useRouter();
  if (isLoading) {
    return (
      <div>loading...</div>
      /* <CustomCircularProgress /> */
    );
  }
  if (isError && pathname !== '/sign-in') {
    push('/sign-in');
  }
  return <div>{children}</div>;
};
