import { jsonplaceholderAxios } from './axios';
import { IUser } from '../../interfaces/user';

const path = '/users';

export const getAllUsers = (): Promise<IUser[] | []> => {
  const response = jsonplaceholderAxios.get<[], IUser[]>(path);
  return response;
};

export const getOneUser = async (id: number): Promise<IUser | null> => {
  const response = await jsonplaceholderAxios.get<[], IUser[]>(`${path}?id=${id}`);
  // console.log('response', response);
  if (response.length) {
    return response[0];
  }
  return null;
};
