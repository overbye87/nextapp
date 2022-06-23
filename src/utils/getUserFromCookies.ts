import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { check } from '../api/main/authApi';
import { addTokenToHeaders } from '../api/main/axios';

export const getUserFromCookies = async (cookies: NextApiRequestCookies) => {
  if (!cookies.token) {
    throw new Error('No token in cookies');
  }

  addTokenToHeaders(JSON.parse(cookies.token));
  const { data: user, token } = await check();

  return {
    user,
    token,
  };
};
