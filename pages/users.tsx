/* eslint-disable no-console */
/* eslint-disable no-alert */
import { AxiosError } from 'axios';
import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next/types';
import { useEffect } from 'react';
import { addTokenToHeaders } from '../src/api/main/axios';
import { getAllUsers } from '../src/api/main/userApi';
import { setCurrentUser } from '../src/store/main/mainSlice';
import { useAppDispatch } from '../src/store/store';
import { IUser } from '../src/types/main';
import cookies from '../src/utils/cookies';
import { getUserFromContext } from '../src/utils/getUserFromContext';

type Props = {
  users: IUser[];
  user: IUser | null;
  protected: boolean;
}

const Users: NextPage<Props> = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (props.user) {
      dispatch(setCurrentUser(props.user));
      cookies.isAuth.set(true);
    }
  }, [dispatch, props.user]);
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
    user: null as IUser | null,
    users: [] as IUser[],
  };
  console.log('ctx', ctx);
  try {
    if (!ctx.req.cookies.isAuth) {
      const { user, token } = await getUserFromContext(ctx);
      props.user = user;
      addTokenToHeaders(token);
    }

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
