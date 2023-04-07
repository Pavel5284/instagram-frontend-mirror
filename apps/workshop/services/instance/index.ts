import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://it-team2-backend-mirror.vercel.app',
});
