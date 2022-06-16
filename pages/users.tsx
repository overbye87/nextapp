/* eslint-disable no-console */
/* eslint-disable no-alert */
import { AxiosError } from 'axios';
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next/types';
import { getAllUsers } from '../api/jsonplaceholder/api';
import { check } from '../api/main/authApi';
import { addTokenToHeaders } from '../api/main/axios';
import { IUserJson } from '../interfaces/user';

type Props = {
  users: IUserJson[];
  protected: boolean;
}

const Users: NextPage<Props> = (props) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {
          props.users.map((person) => (
            <li key={person.name}>
              <Link href={`/user/${person.id}`}><a>{person.name}</a></Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const rawToken = context.req.cookies.token;
  if (rawToken) {
    const token = JSON.parse(rawToken);
    addTokenToHeaders(token);
    const { data, token: newToken } = await check();
  }
  type ServerProps = {
    protected: boolean;
    users: IUserJson[];
  }
  const props: ServerProps = {
    protected: true,
    users: [],
  };
  try {
    const users = await getAllUsers();
    props.users = users;
    return { props };
  } catch (error) {
    console.log((error as AxiosError).message);
  }
  return { props };
};

export default Users;
