import { useMutation } from '@tanstack/react-query';
import Router from 'next/router';
import { Auth } from 'common/path';
import { logOutAPI } from './api';

export const useLogOutMutation = () => useMutation({
    mutationFn: () => logOutAPI.logOut(),
    onSuccess: () => {
      localStorage.removeItem('jwt');
      Router.push(Auth.Login);
    },
    onError: (err) => {
      console.log(err);
    },
  });
