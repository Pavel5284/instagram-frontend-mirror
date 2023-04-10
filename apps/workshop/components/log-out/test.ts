import axios from 'axios';

export const complexMe = async (token: string): Promise<{ email: string; userId: string }> => {
  try {
    const res = await axios.get<{ email: string; userId: string }, any>(
      'https://it-team2-backend-mirror.vercel.app/auth/me',
      {
        headers: { Autorization: `Bearer ${token}` },
      },
    );
    return res;
  } catch (err) {
    try {
      const res2 = await axios.post(
        'https://it-team2-backend-mirror.vercel.app/auth/refresh-token',
        {},
        { withCredentials: true },
      );
      const res3 = axios.get<{ email: string; userId: string }, any>(
        'https://it-team2-backend-mirror.vercel.app/auth/me',
        {
          headers: { Autorization: `token ${res2.data.accessToken}` },
        },
      );

      return res3;
    } catch (err) {
      return { email: '', userId: '' };
    }
  }
};
