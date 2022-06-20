import { check } from '../api/main/authApi';
import { addTokenToHeaders } from '../api/main/axios';

export const getUserFromCookies = async (token: string) => {
  addTokenToHeaders(token);
  const { data: user, token: newToken } = await check();
  return user;
};
