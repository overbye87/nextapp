import { IUser } from '../../types/main';
import { addTokenToHeaders, authAxios } from './axios';

type IResp = {token: string, data: IUser}

export interface ISignIn {
  email: string,
  password: string,
}

export const signIn = async (SignInData : ISignIn): Promise<IUser> => {
  const { token, data } = await authAxios.post<any, IResp>('/auth', SignInData);
  // await storage.token.set(token);
  addTokenToHeaders(token);
  return data;
};

export interface ISignUp {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  login: string;
}

export const signUp = async (SignUpData : ISignUp): Promise<IUser> => {
  const { token, data } = await authAxios.post<any, IResp>('/auth/signup', SignUpData);
  // await storage.token.set(token);
  return data;
};
