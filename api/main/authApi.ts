import { ISignIn, ISignUp, IUser } from '../../types/main';
import { authAxios } from './axios';

type IResp = { token: string, data: IUser }

type Response = {
  data: IUser;
  token: string;
}

export const check = async (): Promise<Response> => {
  return authAxios.get<unknown, IResp>('/auth');
};

export const signIn = async (SignInData: ISignIn): Promise<Response> => {
  return authAxios.post<unknown, IResp>('/auth', SignInData);
};

export const signUp = async (SignUpData: ISignUp): Promise<Response> => {
  return authAxios.post<unknown, IResp>('/auth/signup', SignUpData);
};
