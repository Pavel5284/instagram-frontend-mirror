import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://it-team2-backend-mirror.vercel.app/',
  withCredentials: true,
});
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // ...
    }
    return error;
  },
);
