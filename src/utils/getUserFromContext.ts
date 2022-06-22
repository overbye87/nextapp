import { GetServerSidePropsContext } from 'next/types';
import { check } from '../api/main/authApi';
import { addTokenToHeaders } from '../api/main/axios';

export const getUserFromContext = async (ctx: GetServerSidePropsContext) => {
  const rawToken = ctx.req.cookies.token;
  if (!rawToken) {
    throw new Error('No token in cookies');
  }
  const token = JSON.parse(rawToken);
  addTokenToHeaders(token);

  const { data: user, token: newToken } = await check();
  return {
    user,
    token: newToken,
  };
};
