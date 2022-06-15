import { jsonplaceholderAxios } from './axios';
import { IUserJson } from '../../interfaces/user';

const path = '/users';

export const getAllUsers = (): Promise<IUserJson[] | []> => {
  return jsonplaceholderAxios.get<unknown, IUserJson[]>(path);
};

export const getOneUser = async (id: number): Promise<IUserJson | null> => {
  const response = await jsonplaceholderAxios.get<unknown, IUserJson[]>(path, { params: { id } });
  // console.log('response', response);
  return response[0] || null;
};
