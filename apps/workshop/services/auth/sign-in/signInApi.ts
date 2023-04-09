import { instance } from '../../../../../../instagram-frontend/services/instance/instance';

export type LoginFieldType = {
  email: string;
  password: string;
};

export const SignInApi = {
  me() {
    return instance.get('auth/me');
  },
  login(data: LoginFieldType) {
    return instance.post('auth/login', data);
  },
};
