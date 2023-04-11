import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { AxiosError } from 'axios';
import { SignInApi } from './signInApi';
import { noRefetch } from '../../../common/helpers';

const handleSignInErrors = (error: any) => {
  const errors = error.response.status === 401;

  if (errors) {
    return 'Incorrect password or email';
  }
  return '';
};

export const useLoginMutation = (setError?: Dispatch<SetStateAction<string>> | null) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: SignInApi.login,
    onError: (error: AxiosError) => {
      console.log(error);
      if (error.response?.status === 401) handleSignInErrors(setError);
    },
    onSuccess: (res: any) => {
      console.log(res);
      const token = res.data.accessToken;
      localStorage.setItem('accessToken', token);
      // instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      client.invalidateQueries(['me']);
    },
  });

  return mutation;
};

export const useMeQuery = () =>
  useQuery({
    queryFn: SignInApi.me,
    queryKey: ['me'],
    retry: false,
    ...noRefetch,
  });
