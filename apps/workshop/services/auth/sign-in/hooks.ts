import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SignInApi } from './signInApi';
import { instance } from '../../../../../../instagram-frontend/services/instance/instance';
import { noRefetch } from '../../../../../../instagram-frontend/helpers';
import { Dispatch, SetStateAction } from 'react';

const handleSignInErrors = (error: any) => {
  const errors = error.response.status === 401;

  if (errors) {
    return 'Incorrect password or email';
  }
};

export const useLoginMutation = (setError?: Dispatch<SetStateAction<string>> | null) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: SignInApi.login,
    onError: (error: any) => {
      console.log(error);
      if (setError) handleSignInErrors(error);
    },
    onSuccess: (res) => {
      console.log(res);
      const token = res.data.accessToken;
      localStorage.setItem('jwt', token);
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      client.invalidateQueries(['me']);
    },
  });

  return mutation;
};

export const useMeQuery = () => {
  return useQuery({
    queryFn: SignInApi.me,
    queryKey: ['me'],
    retry: false,
    ...noRefetch,
  });
};
