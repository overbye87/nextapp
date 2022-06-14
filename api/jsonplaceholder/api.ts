import { jsonplaceholderAxios } from './axios';
import { IUserJson } from '../../interfaces/user';

const path = '/users';

export const getAllUsers = (): Promise<IUserJson[] | []> => {
  const response = jsonplaceholderAxios.get<[], IUserJson[]>(path);
  return response;
};

export const getOneUser = async (id: number): Promise<IUserJson | null> => {
  const response = await jsonplaceholderAxios.get<[], IUserJson[]>(`${path}?id=${id}`);
  // console.log('response', response);
  if (response.length) {
    return response[0];
  }
  return null;
};
