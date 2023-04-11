import { useMutation, useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { Auth } from 'common/path';
import { registrationApi } from './api';

type AuthErrorsMessage = {
  message: string;
  field: string;
};

type AuthErrorResponse = AxiosError<{ errorsMessages?: AuthErrorsMessage[] }>;

const handleRegistrationErrors = (error: AuthErrorResponse) => {
  const errorsMessages = error.response?.data.errorsMessages;

  if (errorsMessages) {
    return errorsMessages[0].message;
  }

  return 'something went wrong, please try again';
};

export const useRegisterNewUserMutation = (
  setError?: Dispatch<SetStateAction<string>> | null,
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>,
) =>
  useMutation({
    mutationFn: registrationApi.registerNewUser,

    onError: (error: AuthErrorResponse) => {
      if (setError) setError(handleRegistrationErrors(error));
    },

    onSuccess: () => {
      if (setIsModalOpen) setIsModalOpen(true);
    },
  });

export const useConfirmNewUserQuery = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: registrationApi.confirmNewUserEmail,

    onError: (error: AuthErrorResponse) => {
      const messages = error.response?.data.errorsMessages;
      if (messages) {
        if (messages[0].field === 'code') {
          push(Auth.RegistrationExpired);
        }
      }
    },
  });
};
export const useResendEmailMutation = (
  setConfirmModalOpen?: Dispatch<SetStateAction<boolean>>,
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>,
  setError?: Dispatch<SetStateAction<string>> | null,
) =>
  useMutation({
    mutationFn: registrationApi.resendEmailConfirmation,

    onError: (error: AuthErrorResponse) => {
      if (setError) setError(handleRegistrationErrors(error));
    },

    onSuccess: () => {
      if (setIsModalOpen) setIsModalOpen(false);
      if (setConfirmModalOpen) setConfirmModalOpen(true);
    },
  });
