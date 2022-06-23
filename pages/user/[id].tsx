/* eslint-disable no-console */
import { AxiosError } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { GetServerSidePropsContext } from 'next/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getOneUser } from '../../src/api/main/userApi';
import { IUser } from '../../src/types/main';
import { addTokenToHeaders } from '../../src/api/main/axios';

type Props = {
  user: IUser;
}

const User: NextPage<Props> = ({ user }) => {
  const router = useRouter();
  // console.log(user);
  if (!user) {
    return (
      <>
      <Head>
        <title>No such user</title>
      </Head>
      {/* <h1>User {router.query.id}</h1> */}
      <h1>User is not found</h1>
    </>
    );
  }
  return (
    <>
      <Head>
        <title>User {router.query.id}</title>
      </Head>
      {/* <h1>User {router.query.id}</h1> */}
      <h1>{user.login}</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const rawToken = ctx.req.cookies.token;
    if (!rawToken) {
      throw new Error('Not auth');
    }
    const token = JSON.parse(rawToken);
    addTokenToHeaders(token);
    const user = await getOneUser(Number(ctx.query.id));
    return { props: { user } };
  } catch (error) {
    console.log((error as AxiosError).message);
    return {
      redirect: {
        destination: '/signin',
        statusCode: 301,
      },
    };
  }
  return { props: { user: null } };
};

export default User;
