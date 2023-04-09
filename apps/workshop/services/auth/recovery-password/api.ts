import { instance } from 'services/instance';

export type NewPasswordRequestData = {
  newPassword: string;
  recoveryCode?: string | string[];
};

export const recoveryPasswordApi = {
  recoveryPassword: async (email: string) => {
    const res = await instance.post('/auth/password-recovery-code', { email });
    return res;
  },

  setNewPassword: async (data: NewPasswordRequestData) => {
    const res = await instance.post('/auth/new-password', data);
    return res;
  },
};
