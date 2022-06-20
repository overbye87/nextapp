import { ISignUp, IUser } from '../../types/main';
import { authAxios } from './axios';

export const getAllUsers = async (): Promise<IUser[]> => {
  const data = await authAxios.get<unknown, { data: IUser[] }>('/users');
  return data.data;
};

export const getOneUser = async (id: number): Promise<IUser> => {
  const data = await authAxios.get<unknown, { data: IUser }>(`/users/${id}`);
  return data.data;
};

export const deleteOneUser = async (id: number): Promise<boolean> => {
  const data = await authAxios.delete<unknown, { data: boolean }>(`/users/${id}`);
  return data.data;
};

export const addOneUser = async (SignUpData : ISignUp): Promise<IUser> => {
  const data = await authAxios.post<unknown, { data: IUser }>('/users/add', SignUpData);
  return data.data;
};
