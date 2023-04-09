import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { Auth } from 'common/path';
import { clearLocalStorage, setLocalStorage } from 'common/helpers';
import { RecoveryPasswordStorageKey } from 'common/variables';
import { recoveryPasswordApi } from './api';

type AuthErrorsMessage = {
  message: string;
  field: string;
};

type AuthErrorResponse = AxiosError<{ errorsMessages?: AuthErrorsMessage[] }>;

const handleErrors = (error: AuthErrorResponse) => {
  const errorsMessages = error.response?.data.errorsMessages;

  if (errorsMessages) {
    return errorsMessages[0].message;
  }

  return 'something went wrong, please try again';
};

export const useRecoveryPasswordMutation = (
  onErrorHandler?: ((error: string) => void) | null,
  onSuccessHandler?: () => void,
) =>
  useMutation({
    mutationFn: recoveryPasswordApi.recoveryPassword,

    onError: (error: AuthErrorResponse) => {
      if (onErrorHandler) onErrorHandler(handleErrors(error));
    },

    onSuccess: (_, email) => {
      setLocalStorage(RecoveryPasswordStorageKey, email);

      if (onSuccessHandler) onSuccessHandler();
    },
  });

export const useSetNewPasswordPasswordMutation = (onErrorHandler: (error: string) => void) => {
  const { push } = useRouter();

  return useMutation({
    mutationFn: recoveryPasswordApi.setNewPassword,

    onSuccess: () => {
      clearLocalStorage(RecoveryPasswordStorageKey);
      push(Auth.SignIn);
    },

    onError: (error: AuthErrorResponse) => {
      const messages = error.response?.data.errorsMessages;

      if (messages) {
        if (messages[0].field === 'code') {
          push(Auth.RecoveryPasswordExpired);
          return;
        }

        onErrorHandler(handleErrors(error));
      }
    },
  });
};
