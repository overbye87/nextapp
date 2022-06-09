import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '../../components/layouts/MainLayout';

const User: NextPage = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <>
      <Head>
        <title>Post {router.query.id}</title>
      </Head>
      <h1>Post {router.query.id}</h1>
    </>
  );
};

export default User;
