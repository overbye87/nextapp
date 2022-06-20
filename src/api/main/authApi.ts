import { ISignIn, ISignUp, IUser } from '../../types/main';
import { authAxios } from './axios';

interface IRes {
  token: string;
  data: IUser;
}

export const check = async (): Promise<IRes> => {
  return authAxios.get<unknown, IRes>('/auth');
};

export const signIn = async (SignInData: ISignIn): Promise<IRes> => {
  return authAxios.post<unknown, IRes>('/auth', SignInData);
};

export const signUp = async (SignUpData: ISignUp): Promise<IRes> => {
  return authAxios.post<unknown, IRes>('/auth/signup', SignUpData);
};
