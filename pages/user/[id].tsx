/* eslint-disable no-console */
import { AxiosError } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getOneUser } from '../../api/jsonplaceholder/api';
import { IUserJson } from '../../interfaces/user';
// users/?id=1

type Props = {
  user: IUserJson;
}

const User: NextPage<Props> = ({ user }) => {
  const router = useRouter();
  console.log(user);
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
      <h1>{user.name}</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  try {
    console.log('query.id', query);
    const user = await getOneUser(Number(query.id));
    console.log('user', user);
    return { props: { user } };
  } catch (error) {
    console.log((error as AxiosError).message);
  }
  return { props: { user: null } };
};

export default User;
