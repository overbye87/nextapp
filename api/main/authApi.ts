import { ISignIn, ISignUp, IUser } from '../../types/main';
import { addTokenToHeaders, authAxios } from './axios';

type IResp = {token: string, data: IUser}

export const signIn = async (SignInData : ISignIn): Promise<IUser> => {
  const { token, data } = await authAxios.post<any, IResp>('/auth', SignInData);
  // await storage.token.set(token);
  addTokenToHeaders(token);
  return data;
};

export const signUp = async (SignUpData : ISignUp): Promise<IUser> => {
  const { token, data } = await authAxios.post<any, IResp>('/auth/signup', SignUpData);
  // await storage.token.set(token);
  return data;
};
