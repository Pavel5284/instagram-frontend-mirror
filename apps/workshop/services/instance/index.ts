import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://it-team2-backend-mirror.vercel.app/',
});

export const instanceWithCredentials = axios.create({
  baseURL: 'https://it-team2-backend-mirror.vercel.app/',
  withCredentials: true,
});
/*
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // ...
    }
    return error;
  },
);
instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  // console.log(config.headers.Authorization);
  return config;
});
*/
