/* eslint-disable no-console */
/* eslint-disable no-alert */
import { AxiosError } from 'axios';
import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next/types';
import { addTokenToHeaders } from '../api/main/axios';
import { getAllUsers } from '../api/main/userApi';
import { IUser } from '../types/main';

type Props = {
  users: IUser[];
  protected: boolean;
}

const Users: NextPage<Props> = (props) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {
          props.users.map((person) => (
            <li key={person.login}>
              <Link href={`/user/${person.id}`}><a>{person.firstName} {person.lastName}</a></Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const props = {
    protected: true,
    users: [] as IUser[],
  };
  try {
    const rawToken = ctx.req.cookies.token;
    if (!rawToken) {
      throw new Error('Not auth');
    }
    const token = JSON.parse(rawToken);

    addTokenToHeaders(token);
    const users = await getAllUsers();
    console.log(users);
    props.users = users;
    return { props };
  } catch (error) {
    console.log((error as AxiosError).message);
    return {
      redirect: {
        destination: '/signin',
        statusCode: 301,
      },
    };
  }
};

export default Users;
