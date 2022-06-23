/* eslint-disable no-console */
/* eslint-disable no-alert */
import { AxiosError } from 'axios';
import Link from 'next/link';
import { GetServerSidePropsContext, NextPage } from 'next/types';
import { addTokenToHeaders } from '../src/api/main/axios';
import { getAllUsers } from '../src/api/main/userApi';
import { IUser } from '../src/types/main';

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
    if (!ctx.req.cookies.token) {
      throw new Error('No token in cookies');
    }
    addTokenToHeaders(JSON.parse(ctx.req.cookies.token));
    const users = await getAllUsers();
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
