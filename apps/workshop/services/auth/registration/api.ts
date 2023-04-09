import { instance } from 'services/instance';

type RegisterNewUserType = {
  email: string;
  password: string;
};

export const registrationApi = {
  registerNewUser: async (data: RegisterNewUserType) => {
    const res = await instance.post('/auth/registration', data);
    return res;
  },
  confirmNewUserEmail: async (code: string | string[]) => {
    const res = await instance.post('/auth/registration-confirmation', { code });
    return res;
  },
  resendEmailConfirmation: async (email: string) => {
    const res = await instance.post('/auth/registration-email-resending', { email });
    return res;
  },
};
