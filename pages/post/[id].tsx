import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';

const Post: NextPage = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <MainLayout>
      <Head>
        <title>Post {router.query.id}</title>
      </Head>
      <h1>Post {router.query.id}</h1>
    </MainLayout>
  );
};

export default Post;
