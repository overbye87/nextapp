/* eslint-disable no-alert */
import { AxiosError } from 'axios';
import { GetServerSideProps, NextPage } from 'next/types';
import { authAxios } from '../api/axios';
import { IUser } from '../interfaces/user';

type Props = {
  users: IUser[];
}

const Users: NextPage<Props> = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {
          users.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))
        }
      </ul>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  try {
    const users = await authAxios.get<IUser[]>('/users');
    return { props: { users } };
  } catch (error) {
    alert((error as AxiosError).message);
  }
  return { props: { users: [] } };
};

export default Users;
